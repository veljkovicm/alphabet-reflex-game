import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    gameInProgress,
    startGame,
    stopGame,
  } = props;

  return (
    <>
      <button type="button" onClick={!gameInProgress ? startGame : stopGame}>{!gameInProgress ? 'Start game' : 'Stop game'}</button>
    </>
  )
}

Button.propTypes = {
  gameInProgress: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  stopGame: PropTypes.func.isRequired,
}

export default Button;
