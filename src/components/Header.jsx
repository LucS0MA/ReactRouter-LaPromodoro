import { Link } from "react-router-dom";

import starFightsLogo from "../assets/starFightsLogo.png"
import Button from "./button";



import "./Header.css";

function Header() {
  return (
    <nav className="navBar">

      <Link to="/"><img src={starFightsLogo} alt="StarFights logo" className="navBarLogo" /></Link>
      <div className="buttonNav">
      <Link to="/Support" className="navSupport">Support</Link>
      <Link to="/jeu "><Button>Jouer</Button></Link>
      </div>
      
  

    </nav>
  );
}
export default Header;
