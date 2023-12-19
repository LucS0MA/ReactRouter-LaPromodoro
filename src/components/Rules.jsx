import { Link } from "react-router-dom";
import "./Rules.css";

function Rules() {
    return <div className="rulesSection">
        <h1>Bienvenue jeune padawan</h1>
        <p>Prêt à jouer tu crois être? Pour cela, d'abord lire les règles du jeu tu devras. Pour commencer, le choix de ton personnage tu auras. Lorsqu'une carte, sélectionnée sera, le duel pour sûr commencera. Ta victoire dépendra des statistiques de ta carte et celle de ton adversaire. Faire preuve de sagesse lors de ton choix, tu feras. Maintenant que tu as pris connaissance du déroulement d'une partie, l'accès au jeu, permis te seras. Que la force soit avec toi.
        </p>
        <Link to="/jeu">
            <button className="rulesButton">
                Jouer
            </button>
        </Link>
    </div>
}

export default Rules;