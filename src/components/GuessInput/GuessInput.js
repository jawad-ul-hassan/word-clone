import React, { useState } from 'react';

function GuessInput({ updateGuessList, result }) {
  const [guessWord, setGuessWord] = useState({
    guess: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    updateGuessList(guessWord);
    setGuessWord({ guess: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        className={`${result && 'input-not'}`}
        type="text"
        minLength={5}
        maxLength={5}
        value={guessWord.guess}
        onChange={e =>
          setGuessWord({
            guess: e.target.value.toUpperCase(),
          })
        }
      />
    </form>
  );
}

export default GuessInput;
