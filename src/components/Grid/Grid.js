import React, { useEffect, useState } from 'react';
import { checkGuess } from '../../game-helpers';

function Grid({ guessList, answer, setResult, setShowBanner }) {
  let grid = Array(6)
    .fill(null)
    .map((_, rowIndex) => {
      return Array(5)
        .fill(null)
        .map((_, colIndex) => {
          return (
            <span key={`${rowIndex} - ${colIndex}`} className="cell"></span>
          );
        });
    });

  const guessArr = [...guessList].splice(0, 6);

  useEffect(() => {
    guessArr.forEach(({ guess }) => {
      if (guess === answer) {
        setResult(true);
        setShowBanner(true);
      }
    });
  });

  guessArr.forEach(({ guess }, rowIndex) => {
    const row = grid[rowIndex];

    const checkedGuess = checkGuess(guess, answer);

    checkedGuess.forEach(({ letter, status }, colIndex) => {
      return (row[colIndex] = (
        <span
          key={`${rowIndex} - ${colIndex}`}
          className={`cell ${
            status === 'correct'
              ? 'correct'
              : status === 'incorrect'
              ? 'incorrect'
              : 'misplaced'
          }`}
        >
          {letter}
        </span>
      ));
    });
  });

  return (
    <>
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="guess">
            {row}
          </div>
        );
      })}
    </>
  );
}

export default Grid;
