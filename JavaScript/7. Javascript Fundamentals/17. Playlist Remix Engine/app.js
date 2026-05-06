const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) return [];

  let result = [];

  playlists.forEach((playlist, pIndex) => {
    playlist.forEach((track, tIndex) => {
      result.push({
        ...track,
        source: [pIndex, tIndex]
      });
    });
  });

  return result;
}

function scoreTracks(tracks) {
  return tracks.map(track => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120)
  }));
}

function dedupeTracks(tracks) {
  let seen = new Set();

  return tracks.filter(track => {
    if (seen.has(track.trackId)) {
      return false;
    }
    seen.add(track.trackId);
    return true;
  });
}

function enforceArtistQuota(tracks, maxPerArtist) {
  let count = {};

  return tracks.filter(track => {
    if (!count[track.artist]) {
      count[track.artist] = 0;
    }

    if (count[track.artist] < maxPerArtist) {
      count[track.artist]++;
      return true;
    }

    return false;
  });
}

function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId
  }));
}

function remixPlaylist(playlists, maxPerArtist) {
  const flat = flattenPlaylists(playlists);
  const scored = scoreTracks(flat);
  const deduped = dedupeTracks(scored);
  const limited = enforceArtistQuota(deduped, maxPerArtist);
  return buildSchedule(limited);
}

console.log(remixPlaylist(playlists, 1));