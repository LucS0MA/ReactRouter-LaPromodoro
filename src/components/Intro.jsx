import "./Intro.css";
import laptop from "../assets/laptop.png";

function Intro() {
  return (
    <section className="intro">
      <div className="imageIntroContainer">
        <img
          className="introPicture"
          src={laptop}
          alt="gameplay screenshot"
        />
      </div>
      <div className="infoIntroContainer">
        <h1 className="introHead">Star Fights</h1>
        <p>Bienvenue jeune Padawan !</p>
        <p>
          Tu souhaites rejoindre l'ordre des Jedis ? Affronte les meilleurs Jedis de ta saga préféré dans un duel de carte acharné. 
          <p>Encore là ? Clique sur le bouton Jouer en haut à droite de ton écran.</p>
        </p>
      </div>
    </section>
  );
}

export default Intro;
