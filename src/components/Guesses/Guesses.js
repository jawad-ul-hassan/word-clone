import React, { useState } from 'react';
import Grid from '../Grid';
import Banner from '../Banner';

function Guesses({ guessList, answer, result, setResult }) {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <div className="guess-results">
      {showBanner && <Banner result={result} guessList={guessList} />}
      <Grid
        guessList={guessList}
        answer={answer}
        setResult={setResult}
        setShowBanner={setShowBanner}
      />
    </div>
  );
}

export default Guesses;
