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
import { Distance, Kudos, Stats, Time } from './stats';

export async function ActivitiesTimeline() {
  noStore();
  const activities = await getActivities();
  const activitiesByDate = {};
  activities.forEach((activity) => {
    const d = Intl.DateTimeFormat('en-GB', {
      dateStyle: 'short',
    }).format(Date.parse(activity.start_date));

    if (!activitiesByDate.hasOwnProperty(d)) {
      activitiesByDate[d] = {
        date: d,
        activities: [],
      };
    }
    activitiesByDate[d].activities.push(activity);
  });

  return (
    <div>
      <Timeline>
        {Object.values(activitiesByDate).map((actDay) => (
          <TimelineItem key={actDay.date}>
            <TimelineConnector className="!h-full !w-[76px]" />
            <div>
              <Typography variant="h6" className="pl-20 pt-4 font-normal">
                {actDay.date}
              </Typography>
            </div>
            {actDay.activities.map((activity) => (
              <TimelineHeader
                key={activity.id}
                className="relative max-w-[500px] items-start rounded-xl border border-slate-700 bg-slate-500 py-3 pl-3 pr-8 shadow-lg"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-center">
                    {Intl.DateTimeFormat('en-GB', {
                      timeStyle: 'short',
                    }).format(Date.parse(activity.start_date))}
                  </span>
                  <TimelineIcon className="p-3" variant="ghost">
                    <ActivityIcon activity={activity} />
                  </TimelineIcon>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-4">
                    <Typography className="font-bold">
                      {activity.name}
                    </Typography>
                  </div>
                  <Stats activity={activity} />
                </div>
              </TimelineHeader>
            ))}
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
