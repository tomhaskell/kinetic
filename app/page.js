'use client';

import NavBar from './ui/navbar';
import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export default function Home() {
  const { user, setUser } = useState({});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-700 bg-strava bg-left-bottom bg-no-repeat">
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar></NavBar>
        <div className="p-4"></div>
      </UserContext.Provider>
    </main>
  );
}
