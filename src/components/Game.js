/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import cardsData from '../cardsData';

const Game = (props) => {
  const { selectedCards, clickCard } = props;

  const [deck, setDeck] = useState([]);

  const generateRandomOrder = () => {
    const orderArr = [];
    let randomNum;
    for (let i = 0; i < 4; i++) {
      randomNum = Math.floor(Math.random() * 16);
      if (!orderArr.includes(randomNum)) {
        orderArr.push(randomNum);
      } else {
        generateRandomOrder();
      }
    }
    if (orderArr.every((index) => selectedCards.includes(index))) {
      generateRandomOrder();
    }
    return orderArr;
  };

  const shuffleDeck = () => {
    const order = generateRandomOrder();
    const newDeck = [
      cardsData[order[0]],
      cardsData[order[1]],
      cardsData[order[2]],
      cardsData[order[3]],
    ];
  };

  return (
    <div className="cards-container">
      {deck.map((card) => console.log(card))}
    </div>
  );
};

export default Game;
