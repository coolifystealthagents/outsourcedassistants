import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root = process.cwd();
const manifestPath = path.join(root, '.paperclip/aug10-2026/research.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const indexSource = fs.readFileSync(path.join(root, 'app/research/page.tsx'), 'utf8');
const detailSource = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const expected = [
  'research-article-source-count-audit',
  'research-article-update-and-review-calendar',
  'research-authoritative-source-discovery-workflow',
  'research-comparison-framework-for-assistant-workflows',
  'research-daily-article-source-ledger-template',
  'research-duplicate-topic-screening-routine',
  'research-evidence-first-article-outline',
  'research-internal-linking-and-next-decision-design',
  'research-reader-question-to-evidence-map',
  'research-research-article-reviewer-scorecard',
  'research-service-cluster-opportunity-map',
  'research-source-conflict-resolution-protocol',
  'research-workflow-risk-and-review-burden',
];
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const topKeys = ['schemaVersion', 'contract', 'targetDate', 'family', 'domain', 'repository', 'branch', 'minimum', 'priorRunId', 'priorIssueId', 'validationCommands', 'cleanBuildPassed', 'existingCompliancePassed', 'indexNewestFirstPassed', 'entries'];
assert(JSON.stringify(Object.keys(manifest)) === JSON.stringify(topKeys), 'manifest top-level keys failure');
assert(manifest.schemaVersion === 1 && manifest.contract === 'sites3-aug10-public-date-v6' && manifest.targetDate === '2026-08-10' && manifest.family === 'research', 'manifest identity failure');
assert(manifest.domain === 'outsourcedassistants.com' && manifest.repository === 'coolifystealthagents/outsourcedassistants' && manifest.branch === 'main' && manifest.minimum === 10, 'manifest repository failure');
assert(manifest.priorRunId === 'cdd53249-105b-41c4-a04e-341553415468' && manifest.priorIssueId === '466a4a41-2542-438a-a55b-11c6bf411e98', 'manifest prior identifiers failure');
assert(manifest.cleanBuildPassed === true && manifest.existingCompliancePassed === true && manifest.indexNewestFirstPassed === true, 'manifest validation flags failure');
assert(manifest.entries.length === 13 && JSON.stringify(manifest.entries.map(e => e.slug)) === JSON.stringify(expected), 'manifest exact count/order failure');
const entryKeys = ['slug', 'route', 'sourcePath', 'provenance', 'introducedByCommit', 'sourceDateField', 'sourceDate', 'renderedDateFields', 'renderedDate'];
for (const entry of manifest.entries) {
  assert(JSON.stringify(Object.keys(entry)) === JSON.stringify(entryKeys), 'entry keys failure: ' + entry.slug);
  assert(entry.route === '/research/' + entry.slug && entry.sourcePath === 'app/data.ts' && entry.provenance === 'original-aug10-batch', 'entry identity failure: ' + entry.slug);
  assert(entry.sourceDateField === 'published' && entry.sourceDate === '2026-08-10' && entry.renderedDate === '2026-08-10', 'entry date failure: ' + entry.slug);
  assert(/^[0-9a-f]{40}$/.test(entry.introducedByCommit) && entry.renderedDateFields.length > 0 && entry.renderedDateFields.every(x => ['datePublished', 'article:published_time', 'time[datetime]'].includes(x)), 'entry audit failure: ' + entry.slug);
  assert(source.includes("makeResearch('" + entry.slug + "'") && source.includes("'2026-08-10'"), 'source date missing: ' + entry.slug);
  const before = execFileSync('git', ['show', entry.introducedByCommit + '^:app/data.ts'], {encoding: 'utf8'});
  const introduced = execFileSync('git', ['show', entry.introducedByCommit + ':app/data.ts'], {encoding: 'utf8'});
  const identity = "makeResearch('" + entry.slug + "'";
  assert(!before.includes(identity) && introduced.includes(identity), 'provenance failure: ' + entry.slug);
}
assert(detailSource.includes('datePublished:p.published') && detailSource.includes('Published {p.published}'), 'rendered date exposure failure');
assert(indexSource.includes('researchPostsNewestFirst'), 'index newest-first source failure');
assert(source.includes('const august10ResearchOrder') && source.includes('researchPostsNewestFirst'), 'deterministic index order failure');
console.log('PASS: ' + manifest.entries.length + ' frozen Research entries have source dates, rendered dates, provenance, and deterministic newest-first index checks.');
