import iconYoda from "../assets/iconYoda.png";
import "./PopUp.css";

function PopUp({ onButtonClick }) {
  const handleClick = () => {
    onButtonClick();
  };

  return (
    <div className="popupShow">
      <div className="imagePopup">
        <img src={iconYoda} alt="icon Yoda" />
      </div>
      <div className="messagePopup">
        <p>May the force be with you ! </p>
      </div>
      <div className="boxSub">
        <button className="buttonSub" onClick={handleClick}>
          Ok !
        </button>
        <div className="spaceSub">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
