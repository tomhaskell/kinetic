import { Typography } from '@material-tailwind/react';
import { mdiMapMarkerDistance, mdiTimerOutline } from '@mdi/js';
import Icon from '@mdi/react';

export function Time({ time }) {
  if (typeof time == 'string') {
    time = parseInt(time);
  }

  const secs = time % 60;
  const mins = Math.floor((time / 60) % 60);
  const hrs = Math.floor(time / 3600);
  console.log(time, hrs, mins, secs);

  return (
    <Typography variant="small">
      <Icon path={mdiTimerOutline} />
      {hrs ? hrs + ':' : ''}
      {mins ? mins + ':' : ''}
      {secs}
    </Typography>
  );
}

export function Distance({ value }) {
  return (
    <Typography variant="small" className="font-normal">
      <Icon path={mdiMapMarkerDistance} />
      {Math.round(value / 100) / 10} km
    </Typography>
  );
}
