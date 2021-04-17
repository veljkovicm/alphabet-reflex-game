import * as t from './types';
import { formatAlphabet } from "../helpers";

const formattedAlphabet = formatAlphabet();
const alphabetNumbers = Array.from(Array(27).keys()).slice(1);

const initialState = {
  interval: 0,
  difficulty: 'medium',
  score: {
    hit: 0,
    miss: 0,
    left: 26,
  },
  letters: formattedAlphabet,
  gameInProgress: false,
  current: 0,
  numbers: alphabetNumbers,
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GAME_START:
      return {
        ...state,
        gameInProgress: true,
      };
    case t.GAME_STOP:
      return {
        ...state,
        gameInProgress: false,
      };
    case t.RESET_GAME_DATA:
      return {
        ...state,
        score: initialState.score,
        letters: formatAlphabet(),
        numbers: alphabetNumbers,
        current: 0,
      }
    case t.SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      }
    case t.SET_MY_INTERVAL:
      return {
        ...state,
        interval: action.payload,
      }
    case t.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      }
    case t.SET_NUMBERS:
      return {
        ...state,
        numbers: action.payload,
      }
    case t.RESET_SCORE:
      return {
        ...state,
        score: state.score,
      }
    case t.SET_LETTERS:
      return {
        ...state,
        letters: formattedAlphabet,
      }
    case t.SET_HIT:
      return {
        ...state,
        score: {
          miss: state.score.miss,
          hit: state.score.hit + 1,
          left: action.payload,
        }
      }
    case t.SET_MISS:
      return {
        ...state,
        score: {
          miss: state.score.miss + 1,
          hit: state.score.hit,
          left: action.payload,
        }
      }
    default:
      return state;
  }
};