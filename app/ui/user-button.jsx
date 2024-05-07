'use client';

import Image from 'next/image';
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Avatar,
} from '@material-tailwind/react';
import Icon from '@mdi/react';
import { mdiLogout, mdiOpenInNew, mdiViewDashboard } from '@mdi/js';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function UserButton() {
  const router = useRouter();
  const { data: session, status } = useSession();

  console.debug(session);
  if (status == 'loading') {
    return <div></div>;
  }

  var userButton;
  if (session) {
    const user = session.user;

    userButton = (
      <Menu>
        <MenuHandler>
          <Avatar
            variant="circular"
            alt={`${user.name}`}
            className="cursor-pointer p-0.5"
            src={user.image}
            withBorder={true}
            color="white"
          />
        </MenuHandler>
        <MenuList>
          <MenuItem
            className="flex items-center justify-between"
            onClick={() => router.replace('/dashboard')}
          >
            My Dashboard
            <Icon path={mdiViewDashboard} width={24} />
          </MenuItem>
          <MenuItem
            onClick={() =>
              window.open(
                'https://www.strava.com/athletes/' + user.id,
                '_blank',
              )
            }
            className="flex items-center justify-between"
          >
            View on Strava
            <Icon path={mdiOpenInNew} width={24} />
          </MenuItem>
          <hr className="my-3" />
          <MenuItem
            onClick={signOut}
            className="flex items-center justify-between"
          >
            Logout <Icon path={mdiLogout} width={24} />
          </MenuItem>
        </MenuList>
      </Menu>
    );
  } else {
    userButton = (
      <button onClick={() => signIn('strava', { callbackUrl: '/dashboard' })}>
        <Image
          src="/btn_strava_connectwith_orange.svg"
          width={193}
          height={48}
          alt="Connect with Strava"
        />
      </button>
    );
  }

  return <div className="p-2">{userButton}</div>;
}
