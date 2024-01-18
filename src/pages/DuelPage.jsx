import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DuelResultModal from '../components/DuelResultModal';
import "./DuelPage.css"

const DuelPage = () => {
  const location = useLocation();
  const { selectedCard, adversaireCard } = location.state || {};
  const [resultatDuel, setResultatDuel] = useState(null);
  const [tourUtilisateur, setTourUtilisateur] = useState(true);
  const [pvUtilisateur, setPvUtilisateur] = useState(selectedCard?.pv || 0);
  const [pvAdversaire, setPvAdversaire] = useState(adversaireCard?.pv || 0);
  const [coupsCritiques, setCoupsCritiques] = useState(0);

  const navigate = useNavigate();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const attaqueAdversaire = () => {
    const attaquant = tourUtilisateur ? selectedCard : adversaireCard;
    const defenseur = tourUtilisateur ? adversaireCard : selectedCard;

    let compteurUti = 0 ;
    let compteurAd = 0 ;

  
    let degatsInfligesUtilisateur = Math.max(5, attaquant?.atk - defenseur?.def);
    let degatsInfligesDefenseur = Math.max(5, defenseur?.atk - attaquant?.def);

    const chanceCoupCritiqueUtilisateur = Math.random() <= 0.3;
    const chanceCoupCritiqueAdversaire = Math.random() <= 0.1;

    if (chanceCoupCritiqueUtilisateur) {
       compteurUti++;
       console.log("Coup critUtilisateur")

    //   if(compteurUti === 3 ){
    //     degatsInfligesUtilisateur *=6;
    //   } else {
    // }
    degatsInfligesUtilisateur *= 2;

      setCoupsCritiques(prevCoupsCritiques => prevCoupsCritiques + 1);
    }
    if (chanceCoupCritiqueAdversaire) {
      console.log("Coup critAdversaire")
      
    //   compteurAd++;
    //   if(compteurAd === 3 ){
    //     degatsInfligesDefenseur *=6;
    //   }else{
    // }
    degatsInfligesDefenseur *= 2;
    }


   
    if (!tourUtilisateur) {
      if (degatsInfligesUtilisateur > 0 ) {
        setPvAdversaire(pvAdversaire -  degatsInfligesUtilisateur);
      }
      if (degatsInfligesDefenseur > 0) {
        setPvUtilisateur(pvUtilisateur - degatsInfligesDefenseur);
      }
    } else {
      if (degatsInfligesUtilisateur > 0 )  {
        setPvAdversaire(pvAdversaire - degatsInfligesUtilisateur);
      }
      if (degatsInfligesDefenseur > 0) {
        setPvUtilisateur(pvUtilisateur - degatsInfligesDefenseur);
      }
    }
    console.log("pvUti: ", pvUtilisateur);
     console.log("pv adversaire", pvAdversaire);

 
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


  useEffect(() => {
    if (!tourUtilisateur) {
      const timeoutId = setTimeout(() => {
        attaqueAdversaire();
        setTourUtilisateur(true);
      }, 20);
      return () => clearTimeout(timeoutId);
    }
  }, [tourUtilisateur, selectedCard, adversaireCard, pvUtilisateur, pvAdversaire, coupsCritiques]);

  useEffect(() => {
    if (pvUtilisateur <= 0 || pvAdversaire <= 0) {
      setResultatDuel(pvUtilisateur <= 0 ? 'défaite' : 'victoire');
      console.log('Résultat du duel :', resultatDuel);
      toggleModal(); 
    }
  }, [pvUtilisateur, pvAdversaire]);

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
        <div className="Vs"><img src = {'src/assets/image/Image-Vs1.png'}/></div>
        
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
          <button className="shadow__btn" onClick={handleDuel} disabled={!tourUtilisateur}>
            <span>Attaquer</span>
          </button>
          

          {/* <button className="star-wars-button" onClick={utiliserCompetenceSpeciale} disabled={!competenceSpecialeActive}>
            Compétence Spéciale
          </button> */}
        </>
      )}
  
      <button className="shadow__btn" onClick={() => navigate('/jeu')}>
        Retour à la sélection de personnage
      </button>
      {modalVisible && (
        <DuelResultModal className="shadow__btn" result={resultatDuel}  onClose={() => navigate('/jeu')} />
      )}
    </div>
    
  );
   }

   export default DuelPage;