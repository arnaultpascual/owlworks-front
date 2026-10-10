// Pinned GitHub repositories → shared/data/github.json, via gh, GITHUB_TOKEN, the public API,
// or the committed fallback. Never fails the build.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const USER = 'arnaultpascual';
const OUT = 'shared/data/github.json';
const FALLBACK = 'shared/data/github.fallback.json';
const QUERY = `query($login:String!){user(login:$login){pinnedItems(first:6,types:REPOSITORY){nodes{... on Repository{name description url homepageUrl stargazerCount forkCount primaryLanguage{name color} repositoryTopics(first:6){nodes{topic{name}}}}}}}}`;

const normalise = (r) => ({
  name: r.name,
  description: r.description ?? '',
  url: r.html_url ?? r.url,
  homepage: r.homepageUrl ?? r.homepage ?? '',
  stars: r.stargazerCount ?? r.stargazers_count ?? 0,
  forks: r.forkCount ?? r.forks_count ?? 0,
  language: r.primaryLanguage?.name ?? r.language ?? '',
  topics: r.repositoryTopics?.nodes?.map((n) => n.topic.name) ?? r.topics ?? [],
});

async function viaGhCli() {
  const out = execFileSync('gh', ['api', 'graphql', '-f', `query=${QUERY}`, '-F', `login=${USER}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  return JSON.parse(out).data.user.pinnedItems.nodes.map(normalise);
}

async function viaToken() {
  if (!process.env.GITHUB_TOKEN) throw new Error('no token');
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: QUERY, variables: { login: USER } }),
  });
  if (!res.ok) throw new Error(`graphql ${res.status}`);
  return (await res.json()).data.user.pinnedItems.nodes.map(normalise);
}

async function viaPublic() {
  const html = await (await fetch(`https://github.com/${USER}`, { headers: { 'User-Agent': 'owlworks-site-build' } })).text();
  const names = [...html.matchAll(/<span class="repo"[^>]*>\s*([^<]+?)\s*<\/span>/g)].map((m) => m[1]);
  if (!names.length) throw new Error('no pinned repos found on the profile page');
  const repos = [];
  for (const name of names) {
    const res = await fetch(`https://api.github.com/repos/${USER}/${name}`, { headers: { 'User-Agent': 'owlworks-site-build', Accept: 'application/vnd.github+json' } });
    if (!res.ok) throw new Error(`rest ${res.status}`);
    repos.push(normalise(await res.json()));
  }
  return repos;
}

let repos, source;
for (const [label, fn] of [['gh cli', viaGhCli], ['GITHUB_TOKEN', viaToken], ['public profile + REST', viaPublic]]) {
  try {
    repos = await fn();
    source = label;
    break;
  } catch {
    /* next */
  }
}
if (!repos?.length) {
  repos = JSON.parse(readFileSync(FALLBACK, 'utf8')).repos;
  source = 'fallback';
}
const data = { user: USER, source, fetchedAt: new Date().toISOString(), repos };
writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');
if (source !== 'fallback') writeFileSync(FALLBACK, JSON.stringify({ ...data, source: 'fallback (last good fetch)' }, null, 2) + '\n');
console.log(`github: ${repos.length} pinned repos via ${source} → ${repos.map((r) => `${r.name}★${r.stars}`).join(', ')}`);
