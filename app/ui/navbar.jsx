'use client';
import UserButton from './user-button';
import { racingSansOne } from './fonts';
import { Navbar, Typography } from '@material-tailwind/react';
import Link from 'next/link';

export default function AppNavbar() {
  return (
    <Navbar className="container mx-0 flex h-16 w-full max-w-full items-center justify-between rounded-none border-none bg-slate-800 px-4 sm:px-6">
      <Typography className={`${racingSansOne.className} text-4xl antialiased`}>
        <Link href="/">Kinetic</Link>
      </Typography>
      <UserButton />
    </Navbar>
  );
}
