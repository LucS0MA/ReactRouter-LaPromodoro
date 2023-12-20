import { Link } from "react-router-dom";
import "./Rules.css";

function Rules() {
    return <div className="rulesSection">
        <h1>Rules for new players</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident ea laboriosam ipsa quo assumenda sunt corrupti nemo consequuntur perferendis vel porro quidem quas illo accusamus rem qui iste, earum necessitatibus magnam. Deleniti optio iste sit nisi cupiditate in iure, doloremque qui amet odio ipsam, placeat similique quas quam eius veniam. Numquam officia explicabo illum deserunt dolor assumenda non mollitia fugiat nam vel sit minima debitis harum nulla aliquid voluptate, natus necessitatibus dolore. Labore, reprehenderit.
        </p>
        <Link to="/jeu">
            <button className="rulesButton">
                Jouer
            </button>
        </Link>
    </div>
}

export default Rules;