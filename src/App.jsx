import { useState, useEffect } from 'react';


import './App.css';

const App = () => {
  const alphabet = String.fromCharCode(...Array(123).keys()).slice(97).split('');
  const alphabetNumbers = Array.from(Array(27).keys()).slice(1);

  const formattedAlphabet = alphabet.map((letter) => ({
    position: alphabet.indexOf(letter) + 1,
    status: 'open',
    letter,
  }));

  const [ letters, setLetters ] = useState(formattedAlphabet);
  const [ current, setCurrent ] = useState(0);
  const [ numbers, setNumbers] = useState(alphabetNumbers);
  const [ inputVal, setInputVal ] = useState('');
  const [ difficulty, setDifficulty ] = useState('medium');
  const [ myInterval, setMyInterval ] = useState(0);
  const [ gameInProgress, setGameInProgress ] = useState(true);
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
  }, [ current, gameInProgress ]);


  const generateNumber = () => {
    if(myInterval === 0) {
      setMyInterval(3000);
    }
    setInputVal('');

    if(current > 0 && letters[current - 1].status === 'open') {
      letters[current - 1].status = 'miss';
      setScore((prevState) => ({
        ...prevState,
        miss: prevState.miss + 1,
      }));
    }

    const randomElement = numbers[Math.floor(Math.random() * numbers.length)];
    setCurrent(randomElement);

    const remainingNumbers = numbers.filter((e) => e !== randomElement);
    setNumbers(remainingNumbers)

    if(!numbers.length) {
      setGameInProgress(false);
    }
  }

  const lettersMarkup = (
    letters.map((l) => (
      <span key={l.position}>{l.letter.toUpperCase()}</span>
    ))
  );

  return (
    <div className="App">
      <div>
        <label><input type="radio" value="easy" checked={difficulty === 'easy'} onChange={() => setDifficulty('easy')} />Easy</label>
        <label><input type="radio" value="medium" checked={difficulty === 'medium'} onChange={() => setDifficulty('medium')} />Medium</label>
        <label><input type="radio" value="hard"  checked={difficulty === 'hard'} onChange={() => setDifficulty('hard')} />Hard</label>
      </div>
      <button type="button">start game</button>
      <p>{current}</p>
      <input type="text" value={inputVal} placeholder="Input letter" maxLength="1" />
      <div className="letters-wrapper">{lettersMarkup}</div>
      <div>
        <h4>SCORE</h4>
        <p>{`Hit: ${score.hit}`}</p>
        <p>{`Miss: ${score.miss}`}</p>
        <p>{`Left: ${score.left}`}</p>
      </div>
    </div>
  );
}

export default App;
