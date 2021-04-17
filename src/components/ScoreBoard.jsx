import PropTypes from 'prop-types';

const ScoreBoard = ({ score }) => {
  return (
    <>
      <h4>SCORE</h4>
      <p>{`Hit: ${score.hit}`}</p>
      <p>{`Miss: ${score.miss}`}</p>
      <p>{`Left: ${score.left}`}</p>
    </>
  )
}

ScoreBoard.propTypes = {
  score: PropTypes.object,
}

export default ScoreBoard;
