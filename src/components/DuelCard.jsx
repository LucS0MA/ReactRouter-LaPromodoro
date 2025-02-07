import React, { useState, useEffect, useRef } from 'react';
import CarteDuel from './CarteDuel';
import { useNavigate } from 'react-router-dom';
import "./DuelCard.css"

const DuelCard = () => {
  const navigate = useNavigate();

  const [cartes, setCartes] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [adversaireCard, setAdversaireCard] = useState(null);
  const [fetchParam, setFetchParam] = useState("");

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
      <h1 class="TitleJeu">star fights:</h1>
      <p className='infosTexte'>Bienvenue, dans le jeu <span className='spanColor'>"Star Fights".</span></p>
      <p className='infosTexte'> Pour commencer à <span className='spanColor'>jouer</span>, <span className='spanColor'>clique</span> sur ton <span className='spanColor'>personnage</span> !</p>
      <div className="cartes-container">
        {cartes.map((carte) => (
          <CarteDuel
            key={carte.id}
            name={carte.name}
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
