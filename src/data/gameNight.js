// Organizer ticket URL decoded from the supplied official flyer; details verified 2026-11-16.
export const GAME_NIGHT = Object.freeze({
  start: Date.parse('2026-11-21T15:00:00-08:00'),
  end: Date.parse('2026-11-21T21:00:00-08:00'),
  tickets: 'https://buytickets.at/omegamunuchapter/2490424',
  poster: '/events/sneakers-jersey-2026.png',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=Temecula+Sports+Lounge%2C+27911+Jefferson+Ave+%23104%2C+Temecula%2C+CA+92590',
  calendar: 'https://calendar.google.com/calendar/render?' + new URLSearchParams({
    action: 'TEMPLATE', text: 'Sneakers & Jersey Game Night — Omega Mu Nu',
    dates: '20261121T230000Z/20261122T050000Z', ctz: 'America/Los_Angeles',
    location: 'Temecula Sports Lounge, 27911 Jefferson Ave #104, Temecula, CA 92590',
    details: 'Ark of Bones is sponsoring and attending. Hosted by Omega Mu Nu Chapter of Omega Psi Phi Fraternity, Inc. Scholarship fundraiser. Tickets: https://buytickets.at/omegamunuchapter/2490424',
  }),
});
export function gameNightPhase(now = Date.now()) {
  return now >= GAME_NIGHT.end ? 'ended' : now >= GAME_NIGHT.start ? 'live' : 'upcoming';
}
export function gameNightCountdown(now = Date.now()) {
  const seconds = Math.max(0, Math.floor((GAME_NIGHT.start - now) / 1000));
  return [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60];
}
