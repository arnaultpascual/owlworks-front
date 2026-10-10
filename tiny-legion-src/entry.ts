// The game's own stylesheet and font (latin subset), then the showcase. The storage stub in
// showcase.ts is installed before any game module is evaluated (they are imported dynamically).
import '@tl-modules/@fontsource/lilita-one/latin-400.css';
import '@tl/style.css';
import './showcase.ts';
