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

  return (
    <div className="App">
      <Heading />
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
        resultsText={resultsText}
      />
      <Game selectedCards={selectedCards} />
    </div>
  );
}

export default App;
