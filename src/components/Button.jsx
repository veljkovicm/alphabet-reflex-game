import { useDispatch, useSelector } from 'react-redux';
import {
  resetGameData,
  gameStop,
  gameStart,
  setMyInterval,
} from '../redux/actions';

const Button = () => {
  const dispatch = useDispatch();

  const gameInProgress = useSelector(state => state.gameInProgress);
  const startGame = () => {
    dispatch(resetGameData());
    dispatch(gameStart());
  };
  const stopGame = () => {
    dispatch(resetGameData());
    dispatch(setMyInterval(0));
    dispatch(gameStop());
  }

  return (
    <>
      <button type="button" onClick={!gameInProgress ? startGame : stopGame}>{!gameInProgress ? 'Start game' : 'Stop game'}</button>
    </>
  )
}

export default Button;
