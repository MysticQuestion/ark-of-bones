import { useEffect, useState } from 'react';
import { GAME_NIGHT, gameNightPhase, gameNightCountdown } from '../data/gameNight';

export default function useGameNight() {
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const update = () => setNow(Date.now());
    const interval = window.setInterval(update, 15000);
    const delay = GAME_NIGHT.end - Date.now();
    const expiry = delay > 0 && delay < 2147483647 ? window.setTimeout(update, delay) : null;
    window.addEventListener('focus', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      window.clearInterval(interval);
      if (expiry !== null) window.clearTimeout(expiry);
      window.removeEventListener('focus', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);
  return { phase: gameNightPhase(now), countdown: gameNightCountdown(now) };
}
