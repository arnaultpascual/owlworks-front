/**
 * Tiny Legion live showcase: the real game, staged for owlworks.dev and embedded in an iframe.
 * Query: scene=battle|evolve|parade|map, wave, value, tier, from/to/every, island, hud=0, quality, lang.
 * Silent, stores nothing, no input of its own: the page steers it by postMessage ({tl:1, cmd} in, {tl:1, type} out).
 */

const params = new URLSearchParams(location.search);
const scene = params.get('scene') ?? 'battle';
const num = (k: string, d: number) => (params.has(k) ? Number(params.get(k)) : d);
const lowEnd = (navigator.hardwareConcurrency ?? 4) <= 4 || ((navigator as any).deviceMemory ?? 4) <= 3;
const quality = (params.get('quality') as 'low' | 'high' | null) ?? (lowEnd ? 'low' : 'high');

/* ---- 1. nothing is stored: an in-memory localStorage for this frame only ---- */
const SAVE_KEY = 'tinylegion.save.v1';
const memory = new Map<string, string>();
const island = num('island', 1);
memory.set(
  SAVE_KEY,
  JSON.stringify({
    tutorialDone: true,
    unlocked: scene === 'map' ? island * 10 - 7 : 12,
    mapSeen: island,
    upgrades: { recruits: 3, forge: 4, drill: 3 },
    settings: { music: false, sfx: false, vibration: false, quality, lang: params.get('lang') === 'en' ? 'en' : 'fr' },
  }),
);
Object.defineProperties(Storage.prototype, {
  getItem: { value: (k: string) => memory.get(k) ?? null, configurable: true },
  setItem: { value: (k: string, v: string) => void memory.set(k, String(v)), configurable: true },
  removeItem: { value: (k: string) => void memory.delete(k), configurable: true },
  clear: { value: () => memory.clear(), configurable: true },
});

/* ---- 2. pausable: the page can freeze the frame loop ---- */
const nativeRaf = window.requestAnimationFrame.bind(window);
let paused = params.get('paused') === '1';
let parked: FrameRequestCallback[] = [];
window.requestAnimationFrame = (cb: FrameRequestCallback) => {
  if (paused) {
    parked.push(cb);
    return 0;
  }
  return nativeRaf(cb);
};
const resume = () => {
  if (!paused) return;
  paused = false;
  const cbs = parked;
  parked = [];
  cbs.forEach((cb) => nativeRaf(cb));
};

/* ---- 3. the game ---- */
const post = (msg: Record<string, unknown>) => parent !== window && parent.postMessage({ tl: 1, ...msg }, location.origin);

async function boot() {
  // The glyph atlas is drawn with the game font: wait for it (max 1.5 s), like the game does.
  await Promise.race([document.fonts?.load('96px "Lilita One"') ?? Promise.resolve(), new Promise((r) => setTimeout(r, 1500))]);
  const [{ Game }, { TIERS, firstValue }, { LANE_HALF }] = await Promise.all([
    import('@tl/game/Game'),
    import('@tl/sim/tiers'),
    import('@tl/sim/config'),
  ]);
  const stage = document.getElementById('stage')!;
  const canvas = document.getElementById('game') as HTMLCanvasElement;
  const ui = document.getElementById('ui')!;
  document.body.classList.add('showcase', `scene-${scene}`);
  if (params.get('hud') === '0') document.body.classList.add('no-hud');

  const g = new Game(stage, canvas, ui);
  // the audio stays locked whatever happens in here
  g.input.onFirstGesture = null;
  g.start();

  type Loose = {
    held: Record<string, number>;
    walkFrom: number;
    bestTier: number;
    offered: Parameters<typeof g.pickCard>[0][];
    pending: unknown;
    swapChoices: string[];
    clearField(): void;
    nextWave(): void;
    recomputeStats(): void;
  };
  const L = g as unknown as Loose;

  /** endless battle at `wave` with a legion worth `value`, on autopilot (as promo.battle) */
  const battle = (wave: number, value: number, pre = 1.5) => {
    g.save.tutorialDone = true;
    g.bot = true;
    g.startRun('endless');
    L.clearField();
    L.held = {};
    L.recomputeStats();
    g.wave = wave - 1;
    g.squad.reset(value);
    g.squad.setKeep(g.stats.keep);
    L.nextWave();
    if (pre) g.fastForward(pre);
    g.ui.clearBanners();
    L.bestTier = g.squad.topTier;
    g.world.setFraming(false, 0);
  };

  const parade = (rank: number) => {
    g.save.stats.bestRank = rank;
    g.state = 'over';
    g.toMenu();
  };

  const map = (isl: number) => {
    const unlocked = isl * 10 - 7;
    for (let i = 0; i < unlocked; i++) g.save.stars[String(i)] ??= i % 4 === 3 ? 2 : 3;
    g.save.unlocked = unlocked;
    g.save.mapSeen = isl;
    L.walkFrom = unlocked - 1;
    g.openMap();
  };

  const stageScene = () => {
    if (scene === 'parade') parade(num('from', 1));
    else if (scene === 'map') map(island);
    else if (scene === 'evolve') {
      const tier = num('tier', 1);
      battle(num('wave', 4), Math.max(12, Math.round(firstValue(tier) * 0.82)));
    } else battle(num('wave', 6), num('value', 60));
  };
  stageScene();

  /* ---- 4. the page drives, the frame reports ---- */
  let lastHuman = -1e9;
  let lastArmy = g.squad.value;
  let lastTier = g.squad.topTier;
  let rankIdx = num('from', 1);
  let paradeT = 0;
  let overT = 0;

  addEventListener('message', (e) => {
    if (e.origin !== location.origin || !e.data?.tl) return;
    const d = e.data;
    if (d.cmd === 'pause') paused = true;
    else if (d.cmd === 'resume') resume();
    else if (d.cmd === 'steer' && g.state === 'playing') {
      lastHuman = performance.now();
      g.bot = false;
      g.input.targetX = Math.max(-1, Math.min(1, Number(d.x) || 0)) * LANE_HALF;
    } else if (d.cmd === 'auto') {
      lastHuman = -1e9;
      g.bot = true;
    } else if (d.cmd === 'gate' && g.state === 'playing') {
      g.addSoldiers(Math.max(1, Math.min(500, Number(d.n) || 10)));
    }
  });

  const tick = () => {
    setTimeout(tick, 200);
    if (paused) return;
    const now = performance.now();
    // the autopilot takes over again after 3 s without the visitor
    if (!g.bot && now - lastHuman > 3000 && g.state === 'playing') g.bot = true;
    // the card offers (end of wave, chest) are hidden here and only the autopilot answers them:
    // while the visitor steers, the frame takes a card itself, or the run would stay frozen
    if (g.state === 'cards') {
      if (L.pending) g.replaceCard(L.swapChoices[0] ?? null);
      else if (L.offered.length) g.pickCard(L.offered[Math.floor(Math.random() * L.offered.length)]);
    }
    // a run that ends starts again (the showcase never shows a game-over screen for long)
    if (g.state === 'over' && scene !== 'parade') {
      overT += 0.2;
      if (overT > 2.2) {
        overT = 0;
        stageScene();
      }
    }
    if (scene === 'parade') {
      paradeT += 0.2;
      if (paradeT > num('every', 3)) {
        paradeT = 0;
        rankIdx = rankIdx >= num('to', 8) ? num('from', 1) : rankIdx + 1;
        parade(rankIdx);
        post({ type: 'evolve', tier: rankIdx, rank: TIERS[rankIdx]?.plural });
      }
    }
    const army = g.squad.value;
    const tier = g.squad.topTier;
    if (army > lastArmy + 2) post({ type: 'gain', n: Math.round(army - lastArmy) });
    if (tier > lastTier && scene !== 'parade') post({ type: 'evolve', tier, rank: TIERS[tier]?.plural });
    lastArmy = army;
    lastTier = tier;
    post({ type: 'state', army: Math.round(army), tier, rank: TIERS[tier]?.plural ?? '', wave: g.wave, scene, state: g.state });
  };
  tick();
  post({ type: 'ready' });
}

boot().catch((e) => {
  document.body.classList.add('failed');
  post({ type: 'error', message: String(e?.message ?? e) });
});
