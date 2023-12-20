import "./DualResultModal.css"
const DuelResultModal = ({ result, onClose }) => {
    return (
      <div className="modal-overlay">
        <div className="duel-result-modal">
          <h2>{result === 'victoire' ? 'Victoire' : 'Défaite'}</h2>
          <button className="star-wars-button"onClick={onClose}>Retour à la sélection de personnage</button>
        </div>
      </div>
    );
  };
  export default DuelResultModal