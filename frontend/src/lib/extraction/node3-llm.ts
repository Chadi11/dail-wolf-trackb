/**
 * NODE 3 -- DeepSeek adjudicator (LangChain wrapper).
 *
 * Scope is deliberately narrow: severity, and insurance_type when the lexical
 * cues were weak. Those are the only fields where measurement showed real
 * headroom:
 *
 *   zones     P/R 1.000 deterministic  -> LLM can only make it worse
 *   case_type 1.000     deterministic  -> no
 *   case_kind 0.978     lexicon        -> no
 *   severity  ~0.40 rules / 0.79 ceiling -> YES, adjudicate
 *
 * The key is read from process.env.DEEPSEEK_API_KEY (see .env.local, which is
 * gitignored). Never hardcode it here.
 */

import type { ZoneHit, Severity, InsuranceType } from './types';

import { z } from 'zod';
import { ChatDeepSeek } from '@langchain/deepseek';

const AdjudicationSchema = z.object({
  severity: z.enum(['leicht', 'mittel', 'schwer']).nullable(),
  insurance_type: z
    .enum(['vollkasko', 'teilkasko', 'haftpflicht_gegner', 'gesteuert', 'selbstzahler'])
    .nullable(),
  reasoning: z.string().max(400).optional(),
});

export type Adjudication = {
  severity: Severity | null;
  insuranceType: InsuranceType | null;
  reasoning?: string;
  ok: boolean;
  error?: string;
};

let cachedModel: ChatDeepSeek | null = null;

function getModel(): ChatDeepSeek | null {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) return null;
  if (!cachedModel) {
    cachedModel = new ChatDeepSeek({
      apiKey,
      model: process.env.DEEPSEEK_MODEL ?? 'deepseek-chat',
      temperature: 0,
      maxRetries: 2,
      timeout: 30_000,
    });
  }
  return cachedModel;
}

const SYSTEM_PROMPT = `Du bist Schadengutachter in einem deutschen Autohaus.
Du bewertest ausschliesslich zwei Felder einer Werkstattnotiz:

1. severity: "leicht" | "mittel" | "schwer"
   - leicht  = nur Lack/Oberflaeche (Klarlackkratzer, Lackabrieb, feine Kratzspuren, Smart-Repair faehig)
   - mittel  = Blech/Kunststoff verformt oder Lack durchgeschlagen (Beule, Delle mit Lackschaden,
               Halterung gebrochen, Kratzer bis auf Grundierung)
   - schwer  = grossflaechig, mehrere Bauteile, Strukturschaden, Glasbruch,
               sicherheitsrelevant, nicht fahrbereit, Totalschaden
2. insurance_type: "vollkasko" | "teilkasko" | "haftpflicht_gegner" | "gesteuert" | "selbstzahler" | null

Wichtig:
- Groessenangaben in cm sind im Datensatz KEIN verlaesslicher Hinweis auf die Schwere. Ignoriere sie.
- "Lack laut Sichtpruefung intakt" bedeutet NICHT unbeschaedigt: das Bauteil ist verformt,
  nur der Lack ist heil. Das ist typischerweise "leicht" oder "mittel", nicht null.
- Die Anzahl betroffener Zonen allein entscheidet nicht die Schwere.
- Antworte NUR mit JSON, keine Erklaerung aussen herum.

Format:
{"severity":"mittel","insurance_type":"teilkasko","reasoning":"kurz"}`;

function buildUserPrompt(body: string, zoneHits: ZoneHit[], needInsurance: boolean): string {
  const zoneLines = zoneHits
    .map((h) => `- ${h.zone}${h.paintIntact ? ' (Lack laut Notiz intakt)' : ''}`)
    .join('\n');
  return [
    'Werkstattnotiz:',
    '"""',
    body.trim(),
    '"""',
    '',
    `Bereits sicher erkannte Schadenzonen (${zoneHits.length}):`,
    zoneLines || '- keine',
    '',
    needInsurance
      ? 'Bestimme severity UND insurance_type.'
      : 'Bestimme severity. Setze insurance_type auf null.',
  ].join('\n');
}

/** Pull the first JSON object out of a model response. */
function parseJsonLoose(raw: string): unknown {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = fenced ? fenced[1] : raw;
  const start = candidate.indexOf('{');
  const end = candidate.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) throw new Error('no JSON object in response');
  return JSON.parse(candidate.slice(start, end + 1));
}

export async function adjudicate(
  body: string,
  zoneHits: ZoneHit[],
  needInsurance: boolean
): Promise<Adjudication> {
  const model = getModel();
  if (!model) {
    return {
      severity: null,
      insuranceType: null,
      ok: false,
      error: 'DEEPSEEK_API_KEY not set',
    };
  }

  try {
    const res = await model.invoke([
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: buildUserPrompt(body, zoneHits, needInsurance) },
    ]);

    const text = typeof res.content === 'string' ? res.content : JSON.stringify(res.content);
    const parsed = AdjudicationSchema.parse(parseJsonLoose(text));

    return {
      severity: parsed.severity,
      insuranceType: needInsurance ? parsed.insurance_type : null,
      reasoning: parsed.reasoning,
      ok: true,
    };
  } catch (err) {
    // Fail soft: the deterministic result stays valid, we just lose the
    // adjudicated field. An extraction endpoint must not 500 because an
    // upstream LLM hiccuped.
    return {
      severity: null,
      insuranceType: null,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
