import React from 'react';
import logo from '../imgs/logo.jpg';

const Heading = () => (
  <div className="top-container">
    <img className="logo" src={logo} alt="One Piece logo" />
    <h1 className="title-text">Memory Card Game</h1>
    <p className="directions">
      Gain points for picking cards, but do not pick any card twice
    </p>
  </div>
);

export default Heading;
