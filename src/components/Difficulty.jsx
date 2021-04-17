import PropTypes from 'prop-types';
import { difficultyOptions } from '../constants';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const Difficulty = (props) => {
  const {
    difficulty,
    setDifficulty,
    gameInProgress,
  } = props;

  const inputMarkup = (
    Object.keys(difficultyOptions).map((e) => (
      <FormControl component="fieldset" key={difficultyOptions[e].value}>
        <RadioGroup value={difficulty} onChange={() => setDifficulty(difficultyOptions[e].value)}>
          <FormControlLabel
            disabled={gameInProgress}
            value={difficultyOptions[e].value}
            title={`${difficultyOptions[e].timeout}ms`}
            control={<Radio color="primary" />}
            label={difficultyOptions[e].title}
          />
        </RadioGroup>
      </FormControl>
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
