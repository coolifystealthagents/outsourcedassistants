'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { BlogBanner } from '../blog-banners';

const august17Slugs = new Set([
  'filipino-assistant-calendar-conflict-resolution',
  'remote-assistant-inbox-priority-signals',
  'filipino-assistant-travel-change-monitoring',
  'virtual-assistant-meeting-brief-assembly',
  'outsourced-assistant-crm-duplicate-review',
  'filipino-assistant-operations-dashboard-variance-notes',
  'remote-assistant-customer-onboarding-handoff',
  'virtual-assistant-support-queue-aging-review',
  'filipino-assistant-vendor-document-collection',
  'outsourced-assistant-client-follow-up-boundaries',
  'remote-assistant-document-retention-review',
  'virtual-assistant-help-desk-escalation-map',
  'filipino-assistant-recruiting-coordination-boundaries',
  'outsourced-assistant-project-decision-register',
  'remote-assistant-shared-calendar-time-zone-rules',
  'virtual-assistant-service-request-acceptance-criteria',
  'filipino-assistant-access-expiry-review',
  'virtual-assistant-recurring-work-capacity-plan',
  'filipino-assistant-weekly-owner-handoff',
  'remote-assistant-workflow-exception-taxonomy',
  'virtual-assistant-approval-evidence-matrix',
  'outsourced-assistant-offboarding-work-handoff',
]);

export default function BlogLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const slug = pathname?.startsWith('/blog/') ? pathname.slice('/blog/'.length).split('/')[0] : '';
  if (august17Slugs.has(slug)) return <>{children}</>;

  return <>
    <BlogBanner position="top" />
    {children}
    <BlogBanner position="middle" />
    <BlogBanner position="bottom" />
  </>;
}
