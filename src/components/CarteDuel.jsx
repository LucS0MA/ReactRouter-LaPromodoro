import React from 'react';

const CarteDuel = ({ image, atk, def, pv, onDuel }) => {
  return (
    <div className="carte-duel" onClick={onDuel}>
      <img src={image} alt="Image de la carte" />
      <div className="statistiques">
      </div>
    </div>
  );
};

export default CarteDuel;