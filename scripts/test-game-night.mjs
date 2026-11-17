import assert from 'node:assert/strict';
import { GAME_NIGHT, gameNightPhase, gameNightCountdown } from '../src/data/gameNight.js';
assert.equal(GAME_NIGHT.start, Date.parse('2026-11-21T23:00:00Z'));
assert.equal(GAME_NIGHT.end, Date.parse('2026-11-22T05:00:00Z'));
for (const [now, phase] of [[GAME_NIGHT.start - 1, 'upcoming'], [GAME_NIGHT.start, 'live'], [GAME_NIGHT.end - 1, 'live'], [GAME_NIGHT.end, 'ended'], [GAME_NIGHT.end + 86400000, 'ended']]) assert.equal(gameNightPhase(now), phase);
assert.deepEqual(gameNightCountdown(GAME_NIGHT.start - 90060000), [1,1,1]);
assert.deepEqual(gameNightCountdown(GAME_NIGHT.end), [0,0,0]);
console.log('Game Night: Pacific event times, phase boundaries and countdown passed.');
