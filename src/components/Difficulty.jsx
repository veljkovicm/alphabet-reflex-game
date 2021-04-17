import PropTypes from 'prop-types';
import { difficultyOptions } from '../constants';

const Difficulty = (props) => {
  const {
    difficulty,
    setDifficulty,
    gameInProgress,
  } = props;

  const inputMarkup = (
    Object.keys(difficultyOptions).map((e) => (
      <label key={difficultyOptions[e].value}>
        <input
          type="radio"
          disabled={gameInProgress}
          value={difficultyOptions[e].value}
          checked={difficulty === difficultyOptions[e].value}
          onChange={() => setDifficulty(difficultyOptions[e].value)}
        />
        {difficultyOptions[e].title}
      </label>
    ))
  )

  return (
    <>{inputMarkup}</>
  )
}

Difficulty.propTypes = {
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  gameInProgress: PropTypes.bool.isRequired,
}

export default Difficulty;
