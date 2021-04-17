export const formatAlphabet = () => {
  const alphabet = String.fromCharCode(...Array(123).keys()).slice(97).split('');

  return alphabet.map((letter) => ({
    position: alphabet.indexOf(letter) + 1,
    status: 'open',
    letter,
  }));
}