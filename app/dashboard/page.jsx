'use client';

import { ActivitiesTimeline } from '@/app/ui/activities-timeline';
import { Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Page() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  if (status == 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="items-center p-4">
      <Suspense fallback={<div>Loading... </div>}>
        <ActivitiesTimeline />
      </Suspense>
    </div>
  );
}
