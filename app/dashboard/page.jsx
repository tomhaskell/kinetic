'use client';

import { ActivitiesTimeline } from '@/app/ui/activities-timeline';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="items-center p-4">
      <Suspense fallback={<div>Loading... </div>}>
        <ActivitiesTimeline />
      </Suspense>
    </div>
  );
}
