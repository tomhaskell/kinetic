import { Typography } from '@material-tailwind/react';
import {
  mdiBikePedalClipless,
  mdiHeartPulse,
  mdiImageFilterHdr,
  mdiMapMarkerDistance,
  mdiShoePrint,
  mdiSpeedometer,
  mdiThumbUp,
  mdiTimerOutline,
} from '@mdi/js';
import Icon from '@mdi/react';

export function Stats({ activity }) {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      <Distance value={activity.distance} />
      <Time time={activity.moving_time} />
      <Elevation height={activity.total_elevation_gain} />
      <Kudos count={activity.kudos_count} />
      <AvgSpeed speed={activity.average_speed} type={activity.sport_type} />
      <Cadence cadence={activity.average_cadence} type={activity.sport_type} />
      <HeartRate bpm={activity.average_heartrate} />
    </div>
  );
}

export function StatCard({ title, icon, children }) {
  return (
    <Typography
      variant="small"
      className="flex flex-row items-center gap-1 font-normal"
    >
      <Icon path={icon} width={24} />
      {children}
    </Typography>
  );
}

export function Time({ time }) {
  if (typeof time == 'string') {
    time = parseInt(time);
  }

  const secs = time % 60;
  const mins = Math.floor((time / 60) % 60);
  const hrs = Math.floor(time / 3600);

  return (
    <StatCard icon={mdiTimerOutline} title="Moving Time">
      {hrs ? hrs + ':' : ''}
      {mins ? (mins < 10 ? '0' + mins : mins) + ':' : ''}
      {secs < 10 ? '0' + secs : secs}
    </StatCard>
  );
}

export function Distance({ value }) {
  return (
    <StatCard icon={mdiMapMarkerDistance} title="Distance">
      {Math.round(value / 100) / 10} km
    </StatCard>
  );
}

export function Elevation({ height }) {
  return (
    <StatCard icon={mdiImageFilterHdr} title="Elevation Gain">
      {height}m
    </StatCard>
  );
}

export function Kudos({ count }) {
  return (
    <StatCard icon={mdiThumbUp} title="Distance">
      {count}
    </StatCard>
  );
}

export function AvgSpeed({ speed, type }) {
  var s = '';
  switch (type) {
    case 'Run':
    case 'Walk':
      const sp = (1 / speed / 60) * 1000;
      const secs = Math.round((sp - Math.floor(sp)) * 60);
      s = Math.floor(sp) + ':' + (secs < 10 ? '0' + secs : secs);
      s += ' /km';
      break;
    default:
      s = Math.round((speed * 3600) / 100) / 10 + ' km/h';
  }

  return (
    <StatCard icon={mdiSpeedometer} title="Distance">
      {s}
    </StatCard>
  );
}

export function Cadence({ cadence, type }) {
  var i;
  switch (type) {
    case 'Run':
    case 'Walk':
      i = mdiShoePrint;
      break;
    default:
      i = mdiBikePedalClipless;
  }

  return (
    <StatCard icon={i} title="Cadence">
      {cadence}
    </StatCard>
  );
}

export function HeartRate({ bpm }) {
  return (
    <StatCard icon={mdiHeartPulse} title="Heart Rate">
      {bpm}
    </StatCard>
  );
}
