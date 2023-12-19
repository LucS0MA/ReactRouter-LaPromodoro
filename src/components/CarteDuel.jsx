import React from 'react';
import '../components/CarteDuel.css'


const CarteDuel = ({ image, name, atk, def, pv, onDuel }) => {
  return (
    <div className="carte-duel" onClick={onDuel}>
      <p className="atk">{atk}</p>
      <p className="def">{def}</p>
      <p className="pv">{pv}</p>
      <p className='name'>{name}</p> 
      <img src={image} alt="Image de la carte" />
      <div className="statistiques">
      </div>
    </div>
  );
};

export default CarteDuel;