import * as t from './types';

export const gameStart = () => ({
  type: t.GAME_START,
});
export const gameStop = () => ({
  type: t.GAME_STOP,
});
export const resetGameData = () => ({
  type: t.RESET_GAME_DATA,
});

export const setDifficulty = (difficulty) => ({
  type: t.SET_DIFFICULTY,
  payload: difficulty,
});

export const setMyInterval = (interval) => ({
  type: t.SET_MY_INTERVAL,
  payload: interval,
});

export const resetScore = () => ({
  type: t.RESET_SCORE,
});

export const setHit = (left) => ({
  type: t.SET_HIT,
  payload: left,
});
export const setMiss = (left) => ({
  type: t.SET_MISS,
  payload: left,
});

export const setCurrent = (current) => ({
  type: t.SET_CURRENT,
  payload: current,
});

export const setNumbers = (numbers) => ({
  type: t.SET_NUMBERS,
  payload: numbers,
});

export const setLetters = () => ({
  type: t.SET_NUMBERS,
});