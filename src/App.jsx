import { useState, useEffect } from 'react';
import { difficultyOptions } from './constants';
import { formatAlphabet } from './helpers';
import {
  Button,
  Difficulty,
  LetterBoard,
  ScoreBoard,
  Input,
} from './components';

import './App.css';


const App = () => {
  const alphabetNumbers = Array.from(Array(27).keys()).slice(1);

  const formattedAlphabet = formatAlphabet();

  const [ letters, setLetters ] = useState(formattedAlphabet);
  const [ current, setCurrent ] = useState(0);
  const [ numbers, setNumbers] = useState(alphabetNumbers);
  const [ inputVal, setInputVal ] = useState('');
  const [ difficulty, setDifficulty ] = useState('medium');
  const [ myInterval, setMyInterval ] = useState(0);
  const [ gameInProgress, setGameInProgress ] = useState(false);
  const [ score, setScore ] = useState({
    hit: 0,
    miss: 0,
    left: 26,
  });


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
      setMyInterval(difficultyOptions[difficulty].timeout);
    }
    setInputVal('');
    if(current > 0 && letters[current - 1].status == 'open') {
      letters[current - 1].status = 'miss';
      updateScore('miss');
    }

    const randomElement = numbers[Math.floor(Math.random() * numbers.length)];
    setCurrent(randomElement);

    const remainingNumbers = numbers.filter((e) => e !== randomElement);
    setNumbers(remainingNumbers)

    if(!numbers.length) {
      setGameInProgress(false);
      setMyInterval(0);
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
      updateScore('hit');
    } else {
      letters[indexOfCurrent].status = 'miss';
      updateScore('miss');
    }
    generateNumber();
  }

  const startGame = () => {
    setLetters(formattedAlphabet);
    setNumbers(alphabetNumbers);
    setCurrent(0);
    setScore({
      hit: 0,
      miss: 0,
      left: 26,
    });
    setGameInProgress(true);
  }

  const stopGame = () => {
    setGameInProgress(false);
    setLetters(formattedAlphabet);
    setCurrent(0);
    setScore({
      hit: 0,
      miss: 0,
      left: 26,
    });
    setMyInterval(0);
  }


  const updateScore = (field) => {
    setScore((prevState) => ({
      ...prevState,
      [field]: prevState[field] + 1,
      left: numbers.length,
    }));
  }


  return (
    <div className="App">
      <Difficulty
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        gameInProgress={gameInProgress}
      />
      <Button
        gameInProgress={gameInProgress}
        startGame={startGame}
        stopGame={stopGame}
      />
      <p className="current-letter">{current}</p>
      <Input
        gameInProgress={gameInProgress}
        guessNumber={guessNumber}
        inputVal={inputVal}
      />
      <LetterBoard letters={letters} />
      <ScoreBoard score={score} />
    </div>
  );
}

export default App;
