import { useContext } from 'react';
import { AuthContext } from '@/app/auth-context';
import Image from 'next/image';
import { Tooltip } from '@material-tailwind/react';

export default function User() {
  const { user, setUser } = useContext(AuthContext);

  console.debug(user);

  function viewOnStrava() {
    location.href = `https://www.strava.com/athletes/${user.id}`;
  }

  var userButton;
  if (user && user.id) {
    userButton = (
      <Tooltip content="View on Strava.com">
        <button
          className="inline-flex items-center space-x-2 hover:underline"
          onClick={viewOnStrava}
        >
          <span>
            {user.firstname} {user.lastname}
          </span>
          <img
            src={user.profile_medium}
            alt={user.firstName}
            className="max-h-12"
          />
        </button>
      </Tooltip>
    );
  } else {
    userButton = (
      <button>
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
