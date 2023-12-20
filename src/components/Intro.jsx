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
        <h1 className="introHead">Star Fights</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem minima culpa, vero et esse necessitatibus facere aliquid laborum dolor asperiores possimus autem magnam nemo illo, architecto expedita sint ex excepturi veritatis tempora! Quasi, cupiditate animi dignissimos blanditiis facilis aperiam! Officiis ipsum doloremque distinctio harum totam voluptas fugit eum alias. Pariatur provident totam nulla dignissimos facere, magni ipsum, maxime earum velit atque similique accusantium tempore. Animi est, eius voluptate nemo provident necessitatibus dolores consequuntur molestias magnam reiciendis inventore libero dolor!
        </p>
      </div>
    </section>
  );
}

export default Intro;
