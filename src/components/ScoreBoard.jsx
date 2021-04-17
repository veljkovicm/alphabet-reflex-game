import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TocIcon from '@material-ui/icons/Toc';
import CancelIcon from '@material-ui/icons/Cancel';

const ScoreBoard = ({ score }) => {
  return (
    <div className="scoreboard__wrapper">
      <Typography variant="h6">SCORE</Typography>
      <div className="scoreboard__single">
        <CheckCircleIcon style={{ color: green[500], marginTop: '5px' }} />
        <span> {`Hit: ${score.hit}`}</span>
      </div>
      <div className="scoreboard__single">
        <CancelIcon color="secondary" />
        <span>{`Miss: ${score.miss}`}</span>
      </div>
      <div className="scoreboard__single">
        <TocIcon />
        <span>{`Left: ${score.left}`}</span>
      </div>
    </div>
  
  )
}

ScoreBoard.propTypes = {
  score: PropTypes.object,
}

export default ScoreBoard;
