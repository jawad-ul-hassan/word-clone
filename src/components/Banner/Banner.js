import React from 'react';

function Banner({ result, guessList }) {
  if (result) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessList.length} guesses</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
  );
}

export default Banner;
