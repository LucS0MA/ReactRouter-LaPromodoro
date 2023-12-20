import { Link } from "react-router-dom";
import "./Rules.css";

function Rules() {
    return <div className="rulesSection">
        <h1>Règles du jeu</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id inventore nisi assumenda ipsam modi veritatis quisquam. Quasi quae ullam, illo architecto est beatae nulla amet doloremque nisi? Aspernatur labore architecto recusandae ut, blanditiis aliquid vel provident itaque aperiam illo!
        </p>
        <Link to="/jeu">
            <button className="rulesButton">
                Jouer
            </button>
        </Link>
    </div>
}

export default Rules;