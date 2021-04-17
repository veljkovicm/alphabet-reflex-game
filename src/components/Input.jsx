import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


const Input = ({ guessNumber, inputVal }) => {
  const gameInProgress = useSelector(state => state.gameInProgress);

  return (
    <>
      <input
        disabled={!gameInProgress}
        type="text"
        onChange={guessNumber}
        value={inputVal}
        maxLength="1"
        placeholder="Input letter"
      />
    </>
  )
}

Input.propTypes = {
  guessNumber: PropTypes.func.isRequired,
  inputVal: PropTypes.string.isRequired,
}

export default Input;
