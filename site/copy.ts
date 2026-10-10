/** The design copy in the language of the page being rendered (build time; render.ts calls useCopy first). */
import { COPY_PERCHOIR_FR, type PerchoirCopy, type SiteContent } from '../shared/content.ts';

export let COPY: PerchoirCopy = COPY_PERCHOIR_FR;

export function useCopy(c: SiteContent): void {
  COPY = c.perchoir;
}

export type { PerchoirCopy };
