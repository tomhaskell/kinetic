import { useContext } from 'react';
import { UserContext } from '../page';
import Image from 'next/image';

export default function User() {
  const { user, setUser } = useContext(UserContext);

  var userButton;
  if (user && user.id) {
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

  return <div class="p-2">{userButton}</div>;
}
