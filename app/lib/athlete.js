'use client';

import { AthletesApi } from './strava-api';

export async function getProfile(session) {
  const api = new AthletesApi({ accessToken: session.accessToken });
  const athlete = await api.getLoggedInAthlete();
  return athlete;
}

export async function getAthleteStats(session) {
  const api = new AthletesApi({ accessToken: session.accessToken });
  const athlete = await api.getStats();
  return athlete;
}

export async function getAthleteZones(session) {
  const api = new AthletesApi({ accessToken: session.accessToken });
  const athlete = await api.getLoggedInAthleteZones();
  return athlete;
}
