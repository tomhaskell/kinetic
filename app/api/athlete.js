export async function getAthlete() {
  return {
    id: 1,
    username: null,
    resource_state: 2,
    firstname: 'Testy',
    lastname: 'McTestface',
    bio: '',
    city: 'London',
    state: 'England',
    country: 'United Kingdom',
    sex: 'M',
    premium: true,
    summit: true,
    created_at: '2020-08-15T12:00:00Z',
    updated_at: '2024-04-30T12:30:00Z',
    badge_type_id: 1,
    weight: 75,
    profile_medium: '/example-profile-image-medium.jpg',
    profile: '/example-profile-image-large.jpg',
    friend: null,
    follower: null,
  };
}

export async function getAthleteStats() {
  return {
    biggest_ride_distance: 123456,
    biggest_climb_elevation_gain: 384.40000000000003,
    recent_ride_totals: {
      count: 2,
      distance: 87699.1328125,
      moving_time: 14928,
      elapsed_time: 15867,
      elevation_gain: 1349,
      achievement_count: 8,
    },
    all_ride_totals: {
      count: 460,
      distance: 11041908,
      moving_time: 1708708,
      elapsed_time: 2538754,
      elevation_gain: 105793,
    },
    recent_run_totals: {
      count: 6,
      distance: 39972.61962890625,
      moving_time: 17066,
      elapsed_time: 18171,
      elevation_gain: 558,
      achievement_count: 0,
    },
    all_run_totals: {
      count: 81,
      distance: 498880,
      moving_time: 190179,
      elapsed_time: 199363,
      elevation_gain: 5910,
    },
    recent_swim_totals: {
      count: 0,
      distance: 0,
      moving_time: 0,
      elapsed_time: 0,
      elevation_gain: 0,
      achievement_count: 0,
    },
    all_swim_totals: {
      count: 1,
      distance: 287,
      moving_time: 953,
      elapsed_time: 1342,
      elevation_gain: 0,
    },
    ytd_ride_totals: {
      count: 20,
      distance: 468563,
      moving_time: 69784,
      elapsed_time: 72029,
      elevation_gain: 2575,
    },
    ytd_run_totals: {
      count: 13,
      distance: 77076,
      moving_time: 32338,
      elapsed_time: 34480,
      elevation_gain: 1034,
    },
    ytd_swim_totals: {
      count: 0,
      distance: 0,
      moving_time: 0,
      elapsed_time: 0,
      elevation_gain: 0,
    },
  };
}

export async function getAthleteZones() {
  return {
    heart_rate: {
      custom_zones: false,
      zones: [
        {
          min: 0,
          max: 109,
        },
        {
          min: 109,
          max: 145,
        },
        {
          min: 145,
          max: 162,
        },
        {
          min: 162,
          max: 180,
        },
        {
          min: 180,
          max: -1,
        },
      ],
    },
    power: {
      zones: [
        {
          min: 0,
          max: 127,
        },
        {
          min: 128,
          max: 173,
        },
        {
          min: 174,
          max: 207,
        },
        {
          min: 208,
          max: 242,
        },
        {
          min: 243,
          max: 276,
        },
        {
          min: 277,
          max: 345,
        },
        {
          min: 346,
          max: -1,
        },
      ],
    },
  };
}
