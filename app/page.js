'use client';

import { Button, ThemeProvider } from '@material-tailwind/react';
import { AuthContextProvider } from '@/app/auth-context';
import AppNavbar from '@/app/ui/navbar';
import { ActivitiesTimeline } from './ui/actvities-timeline';
import { Suspense } from 'react';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-start bg-slate-700 bg-strava bg-left-bottom bg-no-repeat pb-20">
        <AuthContextProvider>
          <AppNavbar></AppNavbar>
          <div className="items-center p-4">
            <Suspense fallback={<div>Loading... </div>}>
              <ActivitiesTimeline />
            </Suspense>
          </div>
        </AuthContextProvider>
      </main>
    </ThemeProvider>
  );
}
