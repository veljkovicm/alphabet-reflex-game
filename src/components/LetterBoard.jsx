import { useSelector } from 'react-redux';
import { colors } from '../constants';

const LetterBoard = () => {
  const letters = useSelector(state => state.letters);

  const lettersMarkup = (
    letters.map((l) => (
      <span key={l.position} style={{ color: colors[l.status] }}>{l.letter.toUpperCase()}</span>
    ))
  )

  return (
    <div className="letters-wrapper">{lettersMarkup}</div>
  )
}

export default LetterBoard;
