import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info(answer);

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [result, setResult] = useState(false);

  const updateGuessList = guess => {
    setGuessList(prevGuessList => [...prevGuessList, guess]);
  };

  return (
    <>
      <Guesses
        guessList={guessList}
        answer={answer}
        result={result}
        setResult={setResult}
      />
      <GuessInput updateGuessList={updateGuessList} result={result} />
    </>
  );
}

export default Game;
