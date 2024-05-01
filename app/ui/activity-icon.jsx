import Icon from '@mdi/react';
import { mdiBike, mdiHeart, mdiRunFast, mdiSwim, mdiWalk } from '@mdi/js';
import { bikeIndoor } from '@/app/ui/icons';

export function ActivityIcon({ activity }) {
  var path = mdiHeart;
  var color = 'black-500';
  switch (activity.sport_type) {
    case 'Ride':
      if (activity.trainer) {
        path = bikeIndoor;
      } else {
        path = mdiBike;
      }
      color = 'green-500';
      break;
    case 'Run':
      path = mdiRunFast;
      color = 'orange-800';
      break;
    case 'Walk':
      path = mdiWalk;
      color = 'purple-300';
      break;
    case 'Swim':
      path = mdiSwim;
      color = 'blue-600';
      break;
  }
  return <Icon path={path} size={1} className={`text-${color}`} />;
}
