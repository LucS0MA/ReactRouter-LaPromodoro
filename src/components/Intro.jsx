import "./Intro.css";
import pictureDraft from "../assets/pictureDraft.png";

function Intro() {
  return (
    <section className="intro">
      <div className="imageIntroContainer">
        <img
          className="introPicture"
          src={pictureDraft}
          alt="gameplay screenshot"
        />
      </div>
      <div className="infoIntroContainer">
        <h1 className="introHead">Star Wars</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
    </section>
  );
}

export default Intro;
