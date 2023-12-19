import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./DuelPage.css"

const DuelPage = () => {
  const location = useLocation();
  const { selectedCard, adversaireCard } = location.state || {};
  const [resultatDuel, setResultatDuel] = useState(null);
  const [tourUtilisateur, setTourUtilisateur] = useState(true);
  const [pvUtilisateur, setPvUtilisateur] = useState(selectedCard?.pv || 0);
  const [pvAdversaire, setPvAdversaire] = useState(adversaireCard?.pv || 0);
  const [coupsCritiques, setCoupsCritiques] = useState(0);
  const [competenceSpecialeActive, setCompetenceSpecialeActive] = useState(false);

  const navigate = useNavigate();

  const attaqueAdversaire = () => {
    const attaquant = tourUtilisateur ? selectedCard : adversaireCard;
    const defenseur = tourUtilisateur ? adversaireCard : selectedCard;

  
    let degatsInfligesUtilisateur = Math.max(5, attaquant?.atk - defenseur?.def);
    let degatsInfligesDefenseur = Math.max(5, defenseur?.atk - attaquant?.def);

    const chanceCoupCritiqueUtilisateur = Math.random() <= 0.3;
    const chanceCoupCritiqueAdversaire = Math.random() <= 0.3;

    if (chanceCoupCritiqueUtilisateur) {
      console.log("Coup crit")
      degatsInfligesUtilisateur *= 2;

      setCoupsCritiques(prevCoupsCritiques => prevCoupsCritiques + 1);
    }
    if (chanceCoupCritiqueAdversaire) {
      console.log("Coup crit")
      degatsInfligesDefenseur *= 2;
    }

    console.log("pv utilisateur: ", pvUtilisateur);
    console.log("pv adversaire", pvAdversaire);

    console.log("degatUti: ", degatsInfligesUtilisateur);
    console.log("degat adversaire", degatsInfligesDefenseur);

   
    if (!tourUtilisateur) {
      if (degatsInfligesUtilisateur > 0) {
        setPvAdversaire(pvAdversaire - degatsInfligesUtilisateur);
      }
      if (degatsInfligesDefenseur > 0) {
        setPvUtilisateur(pvUtilisateur - degatsInfligesDefenseur);
      }
    } else {
      if (degatsInfligesUtilisateur > 0) {
        setPvAdversaire(pvAdversaire - degatsInfligesUtilisateur);
      }
      if (degatsInfligesDefenseur > 0) {
        setPvUtilisateur(pvUtilisateur - degatsInfligesDefenseur);
      }
    }

 
    if (pvUtilisateur <= 0) {
      setResultatDuel('défaite');
    } else if (pvAdversaire <= 0) {
      setResultatDuel('victoire');
    } else {
      setResultatDuel(null);
    }

    setTourUtilisateur(true);
  };

  const handleDuel = () => {
    if (selectedCard && adversaireCard) {
      attaqueAdversaire();

      // Vérifier si la compétence spéciale doit être activée
      if (coupsCritiques >= 3) {
        setCompetenceSpecialeActive(true);
      }

      const cardImages = document.querySelectorAll('.cartes-container img');
      cardImages.forEach((img) => img.classList.add('collision'));

      const nameElements = document.querySelectorAll('.cartes-container .nameDuel');
      nameElements.forEach((name) => name.classList.add('collision'));

      const nameAdversaireElements = document.querySelectorAll('.cartes-container .nameDuelOrdi');
      nameAdversaireElements.forEach((name) => name.classList.add('collision'));

      const atkElements = document.querySelectorAll('.cartes-container .atkDuel');
      atkElements.forEach((atk) => atk.classList.add('collision'));

      const atkAdversaireElements = document.querySelectorAll('.cartes-container .atkDuelOrdi');
      atkAdversaireElements.forEach((atk) => atk.classList.add('collision'));

      const defElements = document.querySelectorAll('.cartes-container .defDuel');
      defElements.forEach((def) => def.classList.add('collision'));

      const defAdversaireElements = document.querySelectorAll('.cartes-container .defDuelOrdi');
      defAdversaireElements.forEach((def) => def.classList.add('collision'));

      const pvElements = document.querySelectorAll('.cartes-container .pvDuel');
      pvElements.forEach((pv) => pv.classList.add('collision'));

      const pvAdversaireElements = document.querySelectorAll('.cartes-container .pvDuelOrdi');
      pvAdversaireElements.forEach((pv) => pv.classList.add('collision'));

      setTimeout(() => {
        cardImages.forEach((img) => img.classList.remove('collision'));
        nameElements.forEach((name) => name.classList.remove('collision'));
        atkElements.forEach((atk) => atk.classList.remove('collision'));
        defElements.forEach((def) => def.classList.remove('collision'));
        pvElements.forEach((pv) => pv.classList.remove('collision'));
  
        nameAdversaireElements.forEach((name) => name.classList.remove('collision'));
        atkAdversaireElements.forEach((atk) => atk.classList.remove('collision'));
        defAdversaireElements.forEach((def) => def.classList.remove('collision'));
        pvAdversaireElements.forEach((pv) => pv.classList.remove('collision'));
      }, 500);


    }
  };

  const utiliserCompetenceSpeciale = () => {
    // Logique de la compétence spéciale
    if (competenceSpecialeActive) {
      // Triple les dégâts ou ajoutez votre logique spécifique ici
      console.log("Compétence spéciale activée !");
      // Réinitialiser le nombre de coups critiques
      setCoupsCritiques(0);
      // Désactiver la compétence spéciale
      setCompetenceSpecialeActive(false);
    }
  };

  useEffect(() => {
    if (!tourUtilisateur) {
      const timeoutId = setTimeout(() => {
        attaqueAdversaire();
        setTourUtilisateur(true);
      }, 20);
      return () => clearTimeout(timeoutId);
    }
  }, [tourUtilisateur, selectedCard, adversaireCard, pvUtilisateur, pvAdversaire, coupsCritiques]);

  return (
    <div className="duel-page">
      <div className="cartes-container">
        <div key={selectedCard?.id} className="carte-duel">
          <p className='nameDuel'>{selectedCard.name}</p>
          <p className='atkDuel'>{selectedCard.atk}</p>
          <p className='defDuel'>{selectedCard.def}</p>
          <p className='pvDuel'>{selectedCard.pv}</p>
          <p><img src={selectedCard?.image} alt="Selected Card" /></p>
        </div>
  
        
        <div key={adversaireCard?.id} className="adversaire-card">
          <p className='nameDuelOrdi'>{adversaireCard.name}</p>
          <p className='atkDuelOrdi'>{adversaireCard.atk}</p>
          <p className='defDuelOrdi'>{adversaireCard.def}</p>
          <p className='pvDuelOrdi'>{adversaireCard.pv}</p>
          <p><img src={adversaireCard?.image} alt="Adversary Card" /></p>
        </div>
        
      </div>
  
      {!resultatDuel && (
        <>
          <button className="star-wars-button" onClick={handleDuel} disabled={!tourUtilisateur}>
            Attaquer
          </button>
  
          <button className="star-wars-button" onClick={utiliserCompetenceSpeciale} disabled={!competenceSpecialeActive}>
            Compétence Spéciale
          </button>
        </>
      )}
  
      <button className="star-wars-button" onClick={() => navigate('/jeu')}>
        Retour à la sélection de personnage
      </button>
    </div>
  );
   }

   export default DuelPage;