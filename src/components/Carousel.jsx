import React, { useState } from "react";
// import des sets CSS de slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "../components/Carousel.css";
import { useEffect } from "react";
// import laser from "../assets/laser.png";
// import laser1 from "../assets/laser1.png";

// Setup des boutons de navigation du carousel

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
  // const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Récupération de l'API

  useEffect(() => {
    console.log("je suis dans le useEffect");
    fetch(
      "https://raw.githubusercontent.com/Miadil/starwars-api/master/api/cardGames.json"
    )
      .then((res) => res.json())
      .then((data) => setCharactersInfos(data));
  }, []);

  // Slick settings for carousel display options

  const settings = {
    infinite: true,
    // dots: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // Responsive part of slick
    responsive: [
      {
        breakpoint: 1325,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "25%",
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "22%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0%",
        },
      },
    ],
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const handleButtonClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="container">
      <div className="SlideTopHead">
        {/* <img src={laser1} alt="" className="logoslide left" /> */}
        <h2 className="SlideHead"> personnages jouables </h2>
        {/* <img src={laser} alt="" className="logoslide right" /> */}
      </div>
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
                  <button
                    className="buttonslide"
                    onClick={() => handleButtonClick(index)}
                  ></button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Possible modale */}
      {/* {selectedImageIndex !== null && (
        <div className="ModalDisplay">
          <img
            className="ModalImage"
            src={charactersInfos[selectedImageIndex].image}
            alt=""
          />
          <button onClick={() => setSelectedImageIndex(null)}>Close</button>
        </div>
      )} */}
    </div>
  );
};

export default Carousel;
