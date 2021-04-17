import { useSelector } from 'react-redux';

const ScoreBoard = () => {
  const score = useSelector(state => state.score);

  return (
    <>
      <h4>SCORE</h4>
      <p>{`Hit: ${score.hit}`}</p>
      <p>{`Miss: ${score.miss}`}</p>
      <p>{`Left: ${score.left}`}</p>
    </>
  )
}

export default ScoreBoard;
