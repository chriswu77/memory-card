/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';
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

  const clickCard = (e) => {
    // click the card
    // check if the card has been chosen yet, if not push it into the selected card array - update current score - always clear resultsText on success
    // if repeat card - set best score - reset current score - reset selected cards arr - update game text
    const card = e.target.closest('.card');
    if (card) {
      const id = parseInt(card.id, 10);
      const newCard = isNew(id);
      if (newCard) {
        addCard(selectedCards.concat(id));
        setCurrentScore(currentScore + 1);
        setResultsText('');
      } else {
        setBestScore(currentScore);
        setCurrentScore(0);
        addCard([]);
        setResultsText('Sorry, you already picked that card');
      }
    }
  };

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
