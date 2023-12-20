import { Link } from "react-router-dom";
import starFightsLogo from "../assets/starFightsLogo.png";

import "./Header.css";

function Header() {
  return (
    <nav className="navBar">
      <Link to="/">
        <img
          src={starFightsLogo}
          alt="StarFights logo"
          className="navBarLogo"
        />
      </Link>
      <div className="navBarButtons">
      <Link to="/support"><button className="navBarButtonSupport">Support</button></Link>
      <Link to="/jeu ">
        <button className="navBarButton">Jouer</button>
      </Link>
      </div>
    </nav>
  );
}
export default Header;
