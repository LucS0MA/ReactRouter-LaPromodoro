import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Carousel from "../components/Carousel";
import Scene from "../components/Scene";
import Rules from "./Rules";
import Intro from "./Intro";
import Footer from "./Footer";
import "./style/ComponentParallax.css";
import { useRef } from "react";

function ComponentParallax() {
  return (
    <div className="parallax" style={{ width: "100%", height: "100%" }}>
      <Parallax id="scrollDown" pages={4}>
        <ParallaxLayer offset={0} speed={1}>
          <img
            src="/src/assets/parallax/espace.jpg"
            alt="espace"
            className="fondnoir"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={1.3}>
          <img
            src="/src/assets/parallax/planete2.png"
            alt="petite-planete"
            className="petiteplanete"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.2}>
          <img
            src="/src/assets/parallax/parallax-arriere-plan3.png"
            alt="background-espace"
            className="backgroundspace"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={3}>
          <img
            src="/src/assets/parallax/planetepng.png"
            alt="planete"
            className="planete"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.5}>
          <h1 className="starfights">STAR FiGHTS</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.4}>
          <img
            src="/src/assets/parallax/parallax-deuxieme-plan.png"
            alt="background-espace"
            className="deuxiemeplan"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.9}>
          <img
            src="/src/assets/parallax/morceaumontagne.png"
            className="ajoutpremierplan"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.9}>
          <img
            src="/src/assets/parallax/parallax-premier-plan.png"
            alt="background-espace"
            className="premierplan"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <Intro />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <Carousel />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
          <Scene />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0}>
          <Rules />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ComponentParallax;
