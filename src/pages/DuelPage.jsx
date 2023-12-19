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

    // Calcul des dégâts infligés par l'attaquant et le défenseur
    let degatsInfligesUtilisateur = Math.max(5, attaquant?.atk - defenseur?.def);
    let degatsInfligesDefenseur = Math.max(5, defenseur?.atk - attaquant?.def);

    const chanceCoupCritiqueUtilisateur = Math.random() <= 0.3;
    const chanceCoupCritiqueAdversaire = Math.random() <= 0.3;

    if (chanceCoupCritiqueUtilisateur) {
      console.log("Coup crit")
      degatsInfligesUtilisateur *= 2;
      // Incrémenter le nombre de coups critiques
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

    // Mise à jour des points de vie en fonction du tour
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

    // Vérification de la condition de victoire ou défaite
    if (pvUtilisateur <= 0) {
      setResultatDuel('défaite');
    } else if (pvAdversaire <= 0) {
      setResultatDuel('victoire');
    } else {
      setResultatDuel(null);
    }

    // Passage au tour suivant
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

      setTimeout(() => {
        cardImages.forEach((img) => img.classList.remove('collision'));
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
        <div key={selectedCard?.id}>
          <p><img src={selectedCard?.image} alt="Selected Card" /></p>
        </div>
        <div key={adversaireCard?.id}>
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
};

export default DuelPage;
