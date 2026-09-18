/**
 * POST /api/extract
 *
 * Runs the LangGraph extraction pipeline over one or many workshop notes.
 *
 * NOTE ON LOCATION: this project uses the `src/app` router layout (see
 * src/app/layout.tsx), so the handler lives at src/app/api/extract/route.ts.
 * A file at frontend/app/api/extract/route.ts would be silently ignored by
 * Next.js, because `app/` and `src/app/` are mutually exclusive and `src/app`
 * wins when it exists.
 */

import { z } from 'zod';
import { NextResponse } from 'next/server';

import { runExtraction } from 'src/lib/extraction/graph';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CaseStateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1),
  category_id: z.number().int().optional(),
  category: z.string().optional(),
  is_done: z.boolean().optional(),
});

const SingleSchema = z.object({
  freitext: z.string().min(1, 'freitext must not be empty').max(20_000),
  caseId: z.number().int().nullable().optional(),
  states: z.array(CaseStateSchema).max(50).optional(),
  canceledAt: z.string().nullable().optional(),
  /** Set false to force a deterministic-only run (no DeepSeek call). */
  useLlm: z.boolean().optional().default(true),
});

const BatchSchema = z.object({
  cases: z.array(SingleSchema).min(1).max(200),
});

const BodySchema = z.union([SingleSchema, BatchSchema]);

function isBatch(v: z.infer<typeof BodySchema>): v is z.infer<typeof BatchSchema> {
  return 'cases' in v;
}

export async function POST(request: Request) {
  // --- parse
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'invalid_json', message: 'Request body must be valid JSON.' },
      { status: 400 }
    );
  }

  const parsed = BodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'validation_failed',
        issues: parsed.error.issues.map((i) => ({
          path: i.path.join('.'),
          message: i.message,
        })),
      },
      { status: 422 }
    );
  }

  // --- run
  const started = Date.now();
  try {
    if (isBatch(parsed.data)) {
      const results = await Promise.all(
        parsed.data.cases.map((c) =>
          runExtraction({
            freitext: c.freitext,
            caseId: c.caseId ?? null,
            states: c.states,
            canceledAt: c.canceledAt ?? null,
            useLlm: c.useLlm,
          })
        )
      );
      return NextResponse.json({
        count: results.length,
        elapsedMs: Date.now() - started,
        results,
      });
    }

    const c = parsed.data;
    const result = await runExtraction({
      freitext: c.freitext,
      caseId: c.caseId ?? null,
      states: c.states,
      canceledAt: c.canceledAt ?? null,
      useLlm: c.useLlm,
    });
    return NextResponse.json({ elapsedMs: Date.now() - started, result });
  } catch (err) {
    return NextResponse.json(
      {
        error: 'extraction_failed',
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: '/api/extract',
    method: 'POST',
    llmConfigured: Boolean(process.env.DEEPSEEK_API_KEY),
    body: {
      single: { freitext: 'string', caseId: 'number?', states: 'CaseState[]?', useLlm: 'boolean?' },
      batch: { cases: '[{ freitext, caseId?, states?, useLlm? }]' },
    },
  });
}
