import React from 'react';

const Scoreboard = (props) => {
  const { currentScore, bestScore, resultsText } = props;

  let text;

  if (resultsText === '') {
    text = null;
  } else {
    text = <p className="feedback">{resultsText}</p>;
  }

  return (
    <div className="scoreboard">
      <div className="score-line">
        <p className="score-text">Current Score:</p>
        <p className="score-text score">{currentScore}</p>
      </div>
      <div className="score-line">
        <p className="score-text">Best Score:</p>
        <p className="score-text score">{bestScore}</p>
      </div>
      <div className="score-line">
        <p className="score-text">Max Score:</p>
        <p className="score-text score">16</p>
      </div>
      {text}
    </div>
  );
};

export default Scoreboard;
