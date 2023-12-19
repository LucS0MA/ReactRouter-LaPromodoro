import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "../components/Carousel.css";
import { useEffect } from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import Img7 from "../assets/img7.png";
import Img8 from "../assets/img8.png";
import Img9 from "../assets/img9.png";
import Img10 from "../assets/img10.png";
import Img11 from "../assets/img11.png";
import Img12 from "../assets/img12.png";
import Img13 from "../assets/img13.png";
import Img14 from "../assets/img14.png";
import Img15 from "../assets/img15.png";
import Img16 from "../assets/img16.png";
import Img17 from "../assets/img17.png";
import Img18 from "../assets/img18.png";
import Img19 from "../assets/img19.png";
import Img20 from "../assets/img20.png";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
];

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [charactersInfos, setCharactersInfos] = useState([]);

  useEffect(() => {
    console.log("je suis dans le useEffect");
    fetch(
      "https://raw.githubusercontent.com/Miadil/starwars-api/master/api/cardGames.json"
    )
      .then((res) => res.json())
      .then((data) => setCharactersInfos(data));
  }, []);

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setSlideIndex(next),
  };
  return (
    <div className="container">
      <h2 className="SlideHead"> Cards Characters </h2>
      <div className="slider">
        <Slider {...settings}>
          {charactersInfos.map((characterInfo, index) => (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
              key={index}
            >
              <div>
                <img className="slideimage" src={characterInfo.image} alt="" />
                <div className="Statsslide">
                  <p className="nameslide">{characterInfo.name}</p>
                  <p className="atkslide">{characterInfo.atk}</p>
                  <p className="defslide">{characterInfo.def}</p>
                  <p className="pvslide">{characterInfo.pv}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
