import { useContext } from 'react';
import { AuthContext } from '@/app/auth-context';
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
import { mdiLogout, mdiOpenInNew } from '@mdi/js';

export default function User() {
  const { user, setUser } = useContext(AuthContext);

  console.debug(user);

  function login() {}

  function viewOnStrava() {
    window.open(`https://www.strava.com/athletes/${user.id}`, '_blank');
  }

  function logout() {}

  var userButton;
  if (user && user.id) {
    userButton = (
      <Menu>
        <MenuHandler>
          <Avatar
            variant="circular"
            alt={`${user.firstname} ${user.lastname}`}
            className="cursor-pointer p-0.5"
            src={user.profile_medium}
            withBorder={true}
            color="white"
          />
        </MenuHandler>
        <MenuList>
          <MenuItem
            onClick={viewOnStrava}
            className="flex items-center justify-between"
          >
            View on Strava
            <Icon path={mdiOpenInNew} width={24} />
          </MenuItem>
          <MenuItem
            onClick={logout}
            className="flex items-center justify-between"
          >
            Logout <Icon path={mdiLogout} width={24} />
          </MenuItem>
        </MenuList>
      </Menu>
    );
  } else {
    userButton = (
      <button onClick={login}>
        <Image
          src="/btn_strava_connectwith_orange.png"
          width={193}
          height={48}
          alt="Connect with Strava"
        />
      </button>
    );
  }

  return <div className="p-2">{userButton}</div>;
}
