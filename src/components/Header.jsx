import { Link } from "react-router-dom";
import starFightsLogo from "../assets/starFightsLogo.png"

import "./Header.css";

function Header() {
  return (
    <nav className="navBar">
      <Link to="/"><img src={starFightsLogo} alt="StarFights logo" className="navBarLogo" /></Link>
      <Link to="/jeu "><button className="navBarButton">Start game</button></Link>
    </nav>
  );
}
export default Header;
