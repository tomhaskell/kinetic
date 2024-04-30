import Image from 'next/image';
import User from './user';
import { racingSansOne } from './fonts';

export default function NavBar() {
  return (
    <nav class="w-full bg-gray-800">
      <div class="mx-auto px-4 sm:px-6">
        <div class="relative flex h-16 items-center justify-between">
          <div class="justify-left flex flex-1 items-center">
            <div
              className={`${racingSansOne.className} flex flex-shrink-0 text-4xl antialiased`}
            >
              Kinetic
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0">
        <User />
      </div>
    </nav>
  );
}
