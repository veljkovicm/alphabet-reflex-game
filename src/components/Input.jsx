import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    gameInProgress,
    guessNumber,
    inputVal,
  } = props;

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
  gameInProgress: PropTypes.bool.isRequired,
  guessNumber: PropTypes.func.isRequired,
  inputVal: PropTypes.string.isRequired,
}

export default Input;
