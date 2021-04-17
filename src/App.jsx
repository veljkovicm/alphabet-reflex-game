import { useState } from 'react';


import './App.css';

const App = () => {
  const alphabet = String.fromCharCode(...Array(123).keys()).slice(97).split('');

  const formattedAlphabet = alphabet.map((letter) => ({
    position: alphabet.indexOf(letter) + 1,
    status: 'open',
    letter: letter,
  }));

  const [ letters, setLetters ] = useState(formattedAlphabet);
  const [ current, setCurrent ] = useState(0);
  const [ inputVal, setInputVal ] = useState('');

  const lettersMarkdown = (
    letters.map((l) => (
      <span key={l.position}>{l.letter.toUpperCase()}</span>
    ))
  );

  return (
    <div className="App">
      <button type="button">start game</button>
      <p>{current}</p>
      <input type="text" value={inputVal} placeholder="Input letter" maxLength="1" />
      <div className="letters-wrapper">{lettersMarkdown}</div>
    </div>
  );
}

export default App;
