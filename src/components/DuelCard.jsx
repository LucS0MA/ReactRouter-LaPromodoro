import React, { useState, useEffect, useRef } from 'react';
import CarteDuel from './CarteDuel';
import { useNavigate } from 'react-router-dom';
import "./DuelCard.css"

const DuelCard = () => {
  const navigate = useNavigate();

  const [cartes, setCartes] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [adversaireCard, setAdversaireCard] = useState(null);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/cardGames.json")
      .then((res) => res.json())
      .then((data) => setCartes(data));
  }, []);


  const handleSelect = (carte) => {
    setSelectedCard(carte);
    const adversaireIndex = Math.floor(Math.random() * cartes.length);
    const adversaireCard = cartes[adversaireIndex];
    setAdversaireCard(adversaireCard);

 
    navigate('/duel', { state: { selectedCard: carte, adversaireCard } });
  };
  return (
    <div className="duel-card">
      <div className="cartes-container">
        {cartes.map((carte) => (
          <CarteDuel
            key={carte.id}
            image={carte.image}
            atk={carte.atk}
            def={carte.def}
            pv={carte.pv}
            onDuel={() => handleSelect(carte)}
          />
        ))}
      </div>
      {selectedCard && adversaireCard && (
        <div className="resultat-duel">
          <h2>Résultat du duel :</h2>
          <p>Carte sélectionnée : {selectedCard.image}</p>
          <p>Carte adversaire : {adversaireCard.image}</p>
        </div>
      )}
    </div>
  );
};

export default DuelCard;
