import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
  const {
    gameInProgress,
    guessNumber,
    inputVal,
    setInputRef
  } = props;

  const inputProps = {
    disabled: !gameInProgress,
    onChange: guessNumber,
    value: inputVal,
    maxLength: "1",
    ref: (input) => { setInputRef(input) }
  }

  return (
    <div className="input-wrapper">
      <TextField
        inputProps={inputProps}
        id="outlined-basic"
        maxLength="1"
        label="Input letter"
        variant="outlined"
      />
    </div>
  )
}

Input.propTypes = {
  gameInProgress: PropTypes.bool.isRequired,
  guessNumber: PropTypes.func.isRequired,
  inputVal: PropTypes.string.isRequired,
  setInputRef: PropTypes.func,
}

export default Input;
