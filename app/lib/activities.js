'use client';

import { ActivitiesApi } from './strava-api';

export async function getActivities(session) {
  const api = new ActivitiesApi({ accessToken: session.accessToken });
  const activities = await api.getLoggedInAthleteActivities();
  return activities;
}
