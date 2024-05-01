import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from '@material-tailwind/react';
import { getActivities } from '../api/activities';
import { unstable_noStore as noStore } from 'next/cache.js';
import { ActivityIcon } from './activity-icon';
import { Distance, Time } from './stats';

export async function ActivitiesTimeline() {
  noStore();
  const activities = await getActivities();
  const activitiesByDate = {};
  activities.forEach((activity) => {
    if (!activitiesByDate.hasOwnProperty(activity.start_date)) {
      activitiesByDate[activity.start_date] = {
        date: activity.start_date,
        activities: [],
      };
    }
    activitiesByDate[activity.start_date].activities.push(activity);
  });

  return (
    <div>
      <Timeline>
        {Object.values(activitiesByDate).map((actDay) => (
          <TimelineItem key={actDay.date}>
            <TimelineConnector className="!h-full !w-[76px]" />
            <div>
              <Typography variant="h6" className="pl-20 pt-4 font-normal">
                {Intl.DateTimeFormat('en-GB', {
                  dateStyle: 'short',
                }).format(Date.parse(actDay.date))}
              </Typography>
            </div>
            {actDay.activities.map((activity) => (
              <TimelineHeader
                key={activity.id}
                className="relative rounded-xl border border-slate-700 bg-slate-500 py-3 pl-3 pr-8 shadow-lg"
              >
                <TimelineIcon className="p-3" variant="ghost">
                  <ActivityIcon activity={activity} />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography className="font-bold">{activity.name}</Typography>
                  <div className="flex flex-row gap-2">
                    <Distance value={activity.distance} />
                    <Time time={activity.moving_time} />
                  </div>
                </div>
              </TimelineHeader>
            ))}
            {/* <TimelineIcon className="p-3" variant="ghost">
                <ActivityIcon activity={activity} />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-4">
                  <Typography variant="h6" color="slate">
                    {activity.name}
                  </Typography>
                </div>
                <Typography variant="small" className="font-normal">
                  {Math.round(activity.distance / 100) / 10} km
                </Typography>
              </div> */}
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
