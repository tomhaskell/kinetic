'use client';

import { Button, ThemeProvider } from '@material-tailwind/react';
import NavBar from '@/app/ui/navbar';
import { AuthContextProvider } from '@/app/auth-context';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center justify-between bg-slate-700 bg-strava bg-left-bottom bg-no-repeat">
        <AuthContextProvider>
          <NavBar></NavBar>
          <div className="p-4"></div>
        </AuthContextProvider>
      </main>
    </ThemeProvider>
  );
}
