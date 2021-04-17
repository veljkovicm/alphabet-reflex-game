import PropTypes from 'prop-types';
import { default as ButtonMUI} from '@material-ui/core/Button';

const Button = (props) => {
  const {
    gameInProgress,
    startGame,
    stopGame,
  } = props;

  return (
    <div className="button-wrapper">
      <ButtonMUI
        variant="contained"
        color="primary"
        onClick={!gameInProgress ? startGame : stopGame}
      >
        {!gameInProgress ? 'Start game' : 'Stop game'}
      </ButtonMUI>
    </div>
  )
}

Button.propTypes = {
  gameInProgress: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  stopGame: PropTypes.func.isRequired,
}

export default Button;
