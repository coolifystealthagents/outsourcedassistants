import fs from 'node:fs';
import path from 'node:path';

const plan=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog-plan.json','utf8'));
const dir='content/blog/oct2';
const esc=value=>JSON.stringify(value);
const common=[
  {name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework'},
  {name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework'},
];
const specific={
  'executive-calendar-hold-expiry-rules':{name:'NIST SP 800-46 Rev. 2',url:'https://csrc.nist.gov/pubs/sp/800/46/r2/final'},
  'shared-inbox-forwarding-loop-diagnosis':{name:'CISA: Require Multifactor Authentication',url:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication'},
  'travel-itinerary-connection-risk-brief':{name:'U.S. Department of Transportation: Airline Customer Service Dashboard',url:'https://www.transportation.gov/airconsumer/airline-customer-service-dashboard'},
  'meeting-decision-context-pack':{name:'GAO Green Book',url:'https://www.gao.gov/greenbook'},
  'crm-field-change-impact-review':{name:'CISA: Require Multifactor Authentication',url:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication'},
  'research-survey-question-provenance-check':{name:'AAPOR Transparency Initiative',url:'https://aapor.org/standards-and-ethics/transparency-initiative/'},
  'document-comment-author-cleanup-review':{name:'W3C: Web Content Accessibility Guidelines 2.2',url:'https://www.w3.org/TR/WCAG22/'},
  'project-deliverable-acceptance-evidence-check':{name:'GAO Green Book',url:'https://www.gao.gov/greenbook'},
  'expense-category-policy-conflict-review':{name:'GAO Green Book',url:'https://www.gao.gov/greenbook'},
  'interview-panel-substitution-brief':{name:'U.S. EEOC: Recruiting, Hiring or Promoting Employees',url:'https://www.eeoc.gov/employers/small-business/3-im-recruiting-hiring-or-promoting-employees'},
  'customer-follow-up-channel-switch-check':{name:'NIST Digital Identity Guidelines',url:'https://pages.nist.gov/800-63-4/'},
  'operations-report-provisional-data-labels':{name:'W3C: Web Content Accessibility Guidelines 2.2',url:'https://www.w3.org/TR/WCAG22/'},
};
const records=plan.entries.map(entry=>{
  const file=path.join(dir,`${entry.slug}.md`);
  const source=fs.readFileSync(file,'utf8').trim();
  const blocks=source.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);
  const title=blocks.shift().replace(/^#\s+/,'');
  const body=blocks.filter(x=>!/^#{2,6}\s/.test(x));
  const excerpt=body[0];
  return {entry,title,excerpt,body,sources:[specific[entry.slug],...common]};
});
const output=`// Generated from independently reviewed Markdown sources by scripts/generate-oct2-blog.mjs.\n`+
`const publicationDate='2026-10-02' as const;\n`+
`const image='/assistant-team.jpg';\n`+
`export const october2BlogPosts=[\n`+
records.map(({entry,title,excerpt,body,sources})=>`  {slug:${esc(entry.slug)},title:${esc(title)},excerpt:${esc(excerpt)},service:${esc(entry.service)},minutes:12 as const,published:publicationDate,image,sources:${JSON.stringify(sources)},body:${JSON.stringify(body)}},`).join('\n')+
`\n] as const;\n`;
fs.writeFileSync('app/oct2-blog.ts',output);
