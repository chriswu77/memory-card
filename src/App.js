/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import './style.css';
import Heading from './components/Heading';
import Scoreboard from './components/Scoreboard';
import Game from './components/Game';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [resultsText, setResultsText] = useState('');
  const [selectedCards, addCard] = useState([]);

  const isNew = (id) => {
    if (selectedCards.includes(id)) {
      return false;
    }
    return true;
  };

  const checkIfBest = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  };

  const resetGame = () => {
    checkIfBest();
    setCurrentScore(0);
    addCard([]);
  };

  const clickCard = (e) => {
    const card = e.target.closest('.card');
    if (card) {
      const id = parseInt(card.id, 10);
      const newCard = isNew(id);
      if (newCard) {
        addCard(selectedCards.concat(id));
        setCurrentScore(currentScore + 1);
        setResultsText('');
      } else {
        resetGame();
        setResultsText('Sorry, you already picked that card');
      }
    }
  };

  useEffect(() => {
    if (currentScore === 16) {
      resetGame();
      setResultsText('Congratulations, you won!');
    }
  }, [currentScore]);

  return (
    <div className="App">
      <Heading />
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
        resultsText={resultsText}
      />
      <Game
        selectedCards={selectedCards}
        clickCard={clickCard}
        currentScore={currentScore}
        bestScore={bestScore}
      />
    </div>
  );
}

export default App;
