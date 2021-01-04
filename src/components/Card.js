/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Card = (props) => {
  const { id, name, pic, select } = props;
  return (
    <div className="card" id={id} onClick={select}>
      <img src={pic} alt={name} className="card-pic" />
      <p className="char-name-text">{name}</p>
    </div>
  );
};

export default Card;
