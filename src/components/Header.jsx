import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <ul className="head-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jeu ">Jeu</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
