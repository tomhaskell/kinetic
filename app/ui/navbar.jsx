import Image from 'next/image';
import User from './user';
import { racingSansOne } from './fonts';

export default function NavBar() {
  return (
    <nav className="w-full bg-slate-800">
      <div className="mx-auto px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="justify-left flex flex-1 items-center">
            <div
              className={`${racingSansOne.className} flex flex-shrink-0 text-4xl antialiased`}
            >
              Kinetic
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0">
        <User />
      </div>
    </nav>
  );
}
