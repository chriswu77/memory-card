/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import cardsData from '../cardsData';
import Card from './Card';

const Game = (props) => {
  const { selectedCards, clickCard, currentScore, bestScore } = props;

  const [deck, setDeck] = useState([]);

  const generateRandomOrder = () => {
    let orderArr = [];
    let randomNum;
    for (let i = 0; i < 3; i++) {
      randomNum = Math.floor(Math.random() * 16);
      if (!orderArr.includes(randomNum)) {
        orderArr.push(randomNum);
      } else {
        orderArr = generateRandomOrder();
      }
    }
    if (orderArr.every((index) => selectedCards.includes(index))) {
      orderArr = generateRandomOrder();
    }
    return orderArr;
  };

  const shuffleDeck = () => {
    const order = generateRandomOrder();
    const newDeck = [
      cardsData[order[0]],
      cardsData[order[1]],
      cardsData[order[2]],
    ];
    setDeck(newDeck);
  };

  useEffect(() => {
    shuffleDeck();
  }, []);

  useEffect(() => {
    if (currentScore < 16) {
      shuffleDeck();
    }
  }, [currentScore, bestScore]);

  return (
    <div className="cards-container">
      {deck.map((card) => (
        <Card
          id={card.id}
          name={card.name}
          pic={Object.values(card.pic)}
          select={clickCard}
          key={card.id}
        />
      ))}
    </div>
  );
};

export default Game;
