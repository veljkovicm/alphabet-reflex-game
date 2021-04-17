import { useState, useEffect } from 'react';
import { difficultyOptions } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  gameStop,
  setMyInterval,
  setCurrent,
  setHit,
  setMiss,
  setNumbers,
 } from './redux/actions';
import {
  Button,
  Difficulty,
  LetterBoard,
  ScoreBoard,
  Input,
} from './components';

import './App.css';


const App = () => {
  const dispatch = useDispatch()

  const [ inputVal, setInputVal ] = useState('');
  const gameInProgress = useSelector(state => state.gameInProgress);
  const myInterval = useSelector(state => state.interval);
  const difficulty = useSelector(state => state.difficulty);
  const current = useSelector(state => state.current);
  const numbers = useSelector(state => state.numbers);
  const letters = useSelector(state => state.letters);

  useEffect(() => {
    if(gameInProgress) {
      const interval = setInterval(() => {
        generateNumber();
      }, myInterval)

      return () => clearInterval(interval);
    }
  }, [ gameInProgress, numbers ]);

  const generateNumber = () => {
    if(myInterval === 0) {
      dispatch(setMyInterval(difficultyOptions[difficulty].timeout));
    }
    setInputVal('');
    if(current > 0 && letters[current - 1].status === 'open') {
      letters[current - 1].status = 'miss';
      dispatch(setMiss(numbers.length));
    }

    const randomElement = numbers[Math.floor(Math.random() * numbers.length)];
    dispatch(setCurrent(randomElement));

    const remainingNumbers = numbers.filter((e) => e !== randomElement);
    dispatch(setNumbers(remainingNumbers));

    if(!numbers.length) {
      dispatch(gameStop());
      dispatch(setMyInterval(0));
    }
  }

  const guessNumber = (e) => {
    if(!e.target.value.match(/[a-zA-Z]/)) {
      return;
    }
    setInputVal(e.target.value);

    const currentLetter = (current + 9).toString(36).toUpperCase();

    const indexOfCurrent = letters.indexOf(letters.find((e) => e.position === current));

    if(currentLetter === e.target.value.toUpperCase()) {
      letters[indexOfCurrent].status = 'hit';
      dispatch(setHit(numbers.length));
    } else {
      letters[indexOfCurrent].status = 'miss';
      dispatch(setMiss(numbers.length));
    }
    generateNumber();
  }

  return (
    <div className="App">
      <Difficulty />
      <Button />
      <p className="current-letter">{current}</p>
      <Input guessNumber={guessNumber} inputVal={inputVal} />
      <LetterBoard />
      <ScoreBoard />
    </div>
  );
}

export default App;
