/*
 * Visuals for each project, built only from the public copy on its case study
 * page. No real UI, screenshots, or client data. Latitude59 stays a static
 * illustration (its real assets are confidential); Second Brain and Solarios
 * get small interactive demos.
 * Project tiles keep their own dark identity in both colour schemes.
 */
import EnergyDemo from './EnergyDemo';
import { PipelineVisual } from './StoryVisuals';
import VectorDemo from './VectorDemo';

export const projectTheme: Record<string, string> = {
  latitude59: 'bg-[#0E1A2B]',
  'second-brain': 'bg-[#15121D]',
  solarios: 'bg-[#1C1409]',
};

export default function ProjectArt({ slug }: { slug: string }) {
  if (slug === 'latitude59') return <PipelineVisual active />;
  if (slug === 'second-brain') return <VectorDemo />;
  return <EnergyDemo />;
}
