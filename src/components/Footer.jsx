import iconSteam from "../assets/iconSteam.png";
import iconGithub from "../assets/iconGithub.png";
import iconTwitch from "../assets/iconTwitch.png";
import iconYoda from "../assets/iconYoda.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerText">
        <span>&copy;Promodoro 2023 </span>
        <span> Star Fights </span>
        <img id="yodaFooter" src={iconYoda} alt="Yoda picture" />
      </div>
      <div className="collaboratorsList">
        <p>Contributeurs : </p>
        <ul className="collaborators">
          <li>
            <a href="https://github.com/maevafauvel" target="Blank" >Maeva</a>
          </li>
          <li>
            <a href="https://github.com/Gwenaelbegot" target="Blank">Gwenaël</a>
          </li>
          <li>
            <a href="https://github.com/Gatsuweb" target="Blank">Ivan</a>
          </li>
          <li>
            <a href="https://github.com/HamIIdou" target="Blank" >Hamidou</a>
          </li>
          <li>
            <a href="https://github.com/LucS0MA" target="Blank">Lucien</a>
          </li>
          <li>
            <a href="https://github.com/codeIsHard2023" target="Blank">Vlad</a>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <ul className="linksIcons">
          <li>
            <a href="https://store.steampowered.com/?l=french">
              <img src={iconSteam} alt="Steam icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <img src={iconGithub} alt="GitHub icon" />
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/">
              <img src={iconTwitch} alt="Twitch icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
