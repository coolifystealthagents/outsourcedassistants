type Sep7BlogPost = { slug:string; title:string; excerpt:string; minutes:number; published:'2026-09-07'; image:string; body:string[] };

const image='/assistant-team.jpg';
const finish=(topic:string)=>[
  `Keep the first version of ${topic} small enough to inspect. Use a few ordinary items, one correction, and one genuine exception. The assistant should be able to point to the source, the current status, and the person who owns the next decision without relying on a private message.`,
  'Review the record at a stated time. A pattern may justify a clearer example, a different field, or better reviewer coverage. One unusual case should stay an exception. Managers still own priorities, sensitive interpretation, payments, access changes, customer promises, and final publication.'
];

export const september7BlogPosts:Sep7BlogPost[]=[
 {slug:'virtual-assistant-morning-article-readiness-check',title:'A Morning Article Readiness Check for a Virtual Assistant',excerpt:'A ten-minute check separates drafts that can move today from assignments still waiting on evidence or an editor decision.',minutes:9,published:'2026-09-07',image,body:[
  'A daily article queue can look full even when none of the assignments is ready to write. The missing piece may be a source, a settled reader question, or an editor who can answer a narrow question. A virtual assistant can run a morning readiness check so the team sees those gaps before drafting time disappears.',
  'Give every assignment five fields: reader question, article family, approved sources, draft owner, and review time. Mark the record ready only when each field has a usable value. A topic idea or a folder of links is not enough. The writer needs to know what decision the page should help with and which claims the evidence can support.',
  'Use waiting reasons that describe the dependency. "Needs source date" is more useful than "blocked." Name the owner and the latest useful response time. The assistant may collect missing facts and format the packet, but the editor decides the angle and whether incomplete evidence is acceptable.',
  'End the check with a short ready list and a separate decision list. Do not move a waiting assignment into drafting just to keep a daily count on schedule.',
  ...finish('the readiness check')
 ]},
 {slug:'filipino-assistant-editorial-source-version-log',title:'Keep an Editorial Source Version Log With a Filipino Assistant',excerpt:'A source version log shows which evidence a draft used and when a changed page needs another editorial look.',minutes:10,published:'2026-09-07',image,body:[
  'Web sources change quietly. A Filipino assistant may open the same URL a week later and find revised guidance, a new table, or a missing section. A version log gives the editor enough context to decide whether the draft still holds.',
  'Record the source title, publisher, URL, publication or revision date when shown, access date, and the claim it supports. For a long page, add a heading or table name. Save only material the team is permitted to retain; the public URL and a precise note are often sufficient.',
  'When a source changes, compare the relevant passage with the note used for the draft. Label the effect as none, wording review, claim review, or replacement needed. The assistant reports the difference. The editor decides whether to revise or hold the article.',
  'Do not change an article date merely because a linked page changed. Preserve the publication history and use the site owner\'s normal update policy.',
  ...finish('the source version log')
 ]},
 {slug:'outsourced-assistant-draft-claim-inventory',title:'Build a Draft Claim Inventory With an Outsourced Assistant',excerpt:'A claim inventory makes factual, interpretive, and practical statements visible before an editor reviews the prose.',minutes:10,published:'2026-09-07',image,body:[
  'Editors often discover evidence problems late because claims are buried inside smooth paragraphs. An outsourced assistant can list the draft\'s material claims before copy editing begins. The list is a review aid, not a substitute for reading the article.',
  'For each claim, capture the exact sentence, its type, its source, and its importance to the conclusion. Useful types include sourced fact, calculation, local observation, interpretation, example, and recommendation. Do not attach a citation to a broader statement than the source supports.',
  'Sort unsupported claims by consequence. A minor framing sentence may be narrowed. A price, legal statement, security instruction, or performance promise needs the responsible owner. The assistant can flag the gap but should not invent a citation or soften a material problem until it disappears.',
  'Keep removed claims in the review record with a short reason. That history helps the next writer avoid repeating the same unsupported idea.',
  ...finish('the claim inventory')
 ]},
 {slug:'remote-assistant-content-review-timebox',title:'Set a Content Review Timebox for a Remote Assistant',excerpt:'A review timebox gives daily publishing a dependable decision window without treating silence as approval.',minutes:9,published:'2026-09-07',image,body:[
  'A draft can sit for hours while the remote assistant sends reminders and wonders whether to publish. A review timebox replaces that uncertainty with a named window, a reviewer, and a safe outcome when no decision arrives.',
  'State when the review packet will arrive, what the reviewer must decide, and the latest time a response still protects the release window. Include the route, revision, claim inventory, source notes, image, and technical checks. Keep comments on that revision rather than in scattered chats.',
  'Silence means waiting, not approval. If the timebox closes, the assistant records the missed decision and moves to the next ready task. Only the designated editor can approve a later release or change the publishing order.',
  'Measure decision delay separately from writing time. That distinction prevents a slow approval lane from being reported as an assistant drafting problem.',
  ...finish('the review timebox')
 ]},
 {slug:'virtual-assistant-blog-research-crosslink-review',title:'Review Blog and Research Crosslinks With a Virtual Assistant',excerpt:'A crosslink review checks whether paired Blog and Research pages answer different questions and lead readers honestly.',minutes:10,published:'2026-09-07',image,body:[
  'A Blog guide and a Research report may share a subject, but they should not be disguised copies. A virtual assistant can compare their promises and proposed links before publication. The editor still owns the family choice.',
  'Write one sentence for each page\'s job. The Blog page should help a manager carry out a routine. The Research page should explain a question, method, evidence, interpretation, and limits. If both summaries say the same thing, revise the assignment before polishing titles.',
  'Check link text against the destination. "Read the sample review method" is useful only if the Research page contains that method. Avoid generic links placed solely to increase the count. A reader should understand why the second page is the next step.',
  'Test both directions after release and confirm that the route family, date, and canonical stay correct. A working response alone does not prove the link is editorially sound.',
  ...finish('the crosslink review')
 ]},
 {slug:'filipino-assistant-article-correction-queue',title:'Run an Article Correction Queue With a Filipino Assistant',excerpt:'A separate correction queue keeps factual and technical repairs visible without turning old pages into new publications.',minutes:9,published:'2026-09-07',image,body:[
  'Typos, broken links, stale facts, and layout defects do not all need the same response. A Filipino assistant can maintain a correction queue that separates safe preparation from editorial decisions.',
  'Record the live route, observed problem, evidence, reader effect, proposed repair, and owner. Classify the item as copy, link, factual, accessibility, layout, or policy related. Screenshots can help with a visual defect, but quote the affected text when the problem is factual.',
  'The assistant may prepare a corrected link or obvious typo for review. Changes to meaning, publication history, claims, redirects, or removal need the accountable owner. Keep the previous wording in the record so the reviewer can see what changed.',
  'Close the item only after checking the public page. Do not give the repaired page a new publication date unless the site\'s approved editorial policy calls for a transparent material update.',
  ...finish('the correction queue')
 ]},
 {slug:'outsourced-assistant-article-image-inventory-check',title:'Check Article Image Inventory With an Outsourced Assistant',excerpt:'An image inventory check confirms approval, file health, crop behavior, and alt text before a draft reaches publication.',minutes:9,published:'2026-09-07',image,body:[
  'A convenient image can create licensing, privacy, or layout trouble. An outsourced assistant should begin with the approved inventory and match a draft to an asset that the site already controls.',
  'The record needs the file path, approval or license owner, dimensions, intended placement, and a plain description of what the image contributes. If the asset contains people, interfaces, or customer information, verify that its approved use covers the page.',
  'Open the rendered image at narrow and wide widths. Check distortion, cropping, file response, and alternative text. Alt text should convey useful visual information, not repeat the headline or stuff keywords into the page.',
  'If no approved asset fits, hold the image decision. The assistant should not download or generate a replacement when the campaign restricts work to existing inventory.',
  ...finish('the image inventory check')
 ]},
 {slug:'remote-assistant-publishing-evidence-folder',title:'Create a Publishing Evidence Folder for a Remote Assistant',excerpt:'A small evidence folder preserves the approved revision, route checks, and deployment identity for each daily release.',minutes:10,published:'2026-09-07',image,body:[
  'Publishing work becomes difficult to audit when the approval is in chat, the route list is in a sheet, and the deployed revision is known only to one developer. A remote assistant can assemble a compact evidence folder for each release.',
  'Include the approved content revision, route manifest, source notes, image identity, repository commit, deployment record, and live check. Use links to controlled records where possible instead of copying sensitive material into another system.',
  'Give failed checks their own status and owner. A 404, wrong canonical, missing sitemap entry, or broken image keeps the route open even when the deployment platform says it succeeded. The assistant can record and route the defect; the repository or infrastructure owner fixes it.',
  'Use one folder name tied to the release date and exact commit. That makes later corrections easier to separate from the original campaign.',
  ...finish('the publishing evidence folder')
 ]},
 {slug:'virtual-assistant-topic-collision-screen',title:'Screen Daily Topics for Collisions With a Virtual Assistant',excerpt:'A topic collision screen compares reader questions and conclusions so new articles do not repeat older work under fresh titles.',minutes:9,published:'2026-09-07',image,body:[
  'A new title can hide an old article. Before a daily brief is approved, a virtual assistant can search the archive for overlapping questions, conclusions, and examples. The point is to give the editor a useful comparison, not to make the final topic decision.',
  'Compare the proposed reader, decision, central claim, workflow, and evidence set with existing pages. Keyword overlap alone is weak evidence. Two pages can use different language and still deliver the same answer, while similar titles may serve genuinely different decisions.',
  'Return a short collision note with the nearest routes and the specific overlap. Suggest choices such as narrow the question, update an existing page, link to prior work, or stop the assignment. The editor chooses the path.',
  'Preserve rejected proposals in the planning record. They can explain why a future title was changed without cluttering the public archive.',
  ...finish('the topic collision screen')
 ]},
 {slug:'filipino-assistant-daily-publishing-backup-owner',title:'Name a Backup Owner for Daily Publishing Decisions',excerpt:'A backup owner keeps time-sensitive editorial questions moving while preserving the same evidence and authority boundaries.',minutes:9,published:'2026-09-07',image,body:[
  'A daily routine that depends on one reviewer will eventually stall. A Filipino assistant needs a documented backup path for the decisions that genuinely cannot wait, not a vague instruction to ask anyone who is online.',
  'List each decision type, primary owner, backup owner, response window, and material the backup must review. Content approval, source interpretation, access changes, and deployment authority may have different backups. Do not assume one delegate can make every decision.',
  'When the primary owner is unavailable, the assistant sends the same packet and records who answered. The backup should see the current revision, open questions, and consequences of delay. A private verbal answer belongs in the controlled record before action continues.',
  'Review backup use monthly. Frequent activation may show that the normal review window or staffing coverage is wrong.',
  ...finish('the backup-owner routine')
 ]},
 {slug:'outsourced-assistant-live-route-spot-check',title:'Give an Outsourced Assistant a Live Route Spot Check',excerpt:'A route spot check tests what a reader and search crawler receive after deployment, not merely what the build promised.',minutes:10,published:'2026-09-07',image,body:[
  'A green build does not guarantee a correct public article. An outsourced assistant can run a live route spot check after deployment and attach the evidence to the release record.',
  'Open the canonical domain without a logged-in session. Confirm the response status, visible title and date, article family, canonical link, structured publication date, and rendered image. Then find the route on its family index and in the sitemap.',
  'Check the image request separately and inspect the page at desktop and mobile widths. Look for clipped text, empty sections, broken navigation, or an image that loads but does not fit. The open graph image also needs a successful response when the page declares one.',
  'Record the check time and exact URL. If any gate fails, reopen the release item and send the defect to the owner who can change code or infrastructure.',
  ...finish('the live route spot check')
 ]},
 {slug:'remote-assistant-editorial-week-opening-brief',title:'Prepare a Week-Opening Editorial Brief With a Remote Assistant',excerpt:'A week-opening brief gives daily article work a stable queue while keeping changes and exceptions visible.',minutes:10,published:'2026-09-07',image,body:[
  'Monday publishing often starts with a rush to choose today\'s topics. A remote assistant can prepare a week-opening brief that shows what is truly ready and which decisions must arrive before later assignments begin.',
  'List each proposed route, family, reader question, evidence owner, draft slot, review window, and approved image. Add a collision check and a short note on why the page earns a separate identity. This is more useful than a calendar filled only with titles.',
  'Freeze the next ready item while leaving later work open to evidence. When a priority changes, preserve the earlier brief and record the reason, new owner, and effect on work already completed. The assistant updates the schedule after approval.',
  'Close the brief with capacity and decision risks, not a promise that every proposed page will ship. Daily quality gates still decide whether a route is publishable.',
  ...finish('the week-opening brief')
 ]}
];
