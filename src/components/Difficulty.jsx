import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty } from '../redux/actions';
import { difficultyOptions } from '../constants';

const Difficulty = () => {
  const gameInProgress = useSelector(state => state.gameInProgress);
  const difficulty = useSelector(state => state.difficulty);

  const dispatch = useDispatch();
  const changeDifficulty = (diff) => dispatch(setDifficulty(diff));


  const inputMarkup = (
    Object.keys(difficultyOptions).map((e) => (
      <label key={difficultyOptions[e].value}>
        <input
          type="radio"
          disabled={gameInProgress}
          value={difficultyOptions[e].value}
          checked={difficulty === difficultyOptions[e].value}
          onChange={() => changeDifficulty(difficultyOptions[e].value)}
        />
        {difficultyOptions[e].title}
      </label>
    ))
  )

  return (
    <>{inputMarkup}</>
  )
}


export default Difficulty;
