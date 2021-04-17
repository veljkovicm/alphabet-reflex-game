import PropTypes from 'prop-types';
import { colors } from '../constants';

const LetterBoard = ({ letters }) => {
  const lettersMarkup = (
    letters.map((l) => (
      <span key={l.position} style={{ color: colors[l.status] }}>{l.letter.toUpperCase()}</span>
    ))
  )

  return (
    <div className="letters-wrapper">{lettersMarkup}</div>
  )
}

LetterBoard.propTypes = {
  letters: PropTypes.array,
}

export default LetterBoard;
