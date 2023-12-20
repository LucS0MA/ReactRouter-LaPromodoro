import { Link } from "react-router-dom";
import starFightsLogo from "../assets/starFightsLogo.png"
import Button from "./button";

import "./Header.css";

function Header() {
  return (
    <nav className="navBar">
      <Link to="/"><img src={starFightsLogo} alt="StarFights logo" className="navBarLogo" /></Link>
      <Link to="/jeu "><Button>Jouer</Button></Link>
      
    </nav>
  );
}
export default Header;
