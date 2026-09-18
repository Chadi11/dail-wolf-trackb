import { CONFIG } from 'src/global-config';

import { DamageView } from 'src/sections/damage/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Schadenvisualisierung - ${CONFIG.appName}` };

export default function Page() {
  return <DamageView />;
}
