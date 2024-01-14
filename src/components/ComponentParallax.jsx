import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Carousel from "../components/Carousel";
import Scene from "../components/Scene";
import Rules from "./Rules";
import Intro from "./Intro";
import Footer from "./Footer";
import "./style/ComponentParallax.css";

import Espace from "../assets/parallax/espace.jpg"
import Planete2 from "../assets/parallax/planete2.png"
import Plan3 from "../assets/parallax/parallax-arriere-plan3.png"
import PlanetePng from "../assets/parallax/planetepng.png"
import Plan2 from "../assets/parallax/parallax-deuxieme-plan.png"
import Morceau from "../assets/parallax/morceaumontagne.png"
import Plan1 from "../assets/parallax/parallax-premier-plan.png"

function ComponentParallax() {
  return (
    <div className="parallax" style={{ width: "100%", height: "100%" }}>
      <Parallax id="scrollDown" pages={4}>
        <ParallaxLayer offset={0} speed={1}>
          <img
            src={Espace}
            alt="espace"
            className="fondnoir"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={1.3}>
          <img
            src={Planete2}
            alt="petite-planete"
            className="petiteplanete"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.2}>
          <img
            src={Plan3}
            alt="background-espace"
            className="backgroundspace"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={3}>
          <img
            src={PlanetePng}
            alt="planete"
            className="planete"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.5}>
          <h1 className="starfights">STAR FiGHTS</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.4}>
          <img
            src={Plan2}
            alt="background-espace"
            className="deuxiemeplan"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.9}>
          <img
            src={Morceau}
            className="ajoutpremierplan"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.9}>
          <img
            src={Plan1}
            alt="background-espace"
            className="premierplan"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0}>
          <div>
            <Intro />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.7} speed={0}>
          <div className="sectionCarousel">
            <Carousel />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.7} speed={0}>
          <div className="section3D">
            <Scene />
            <Rules />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.91} speed={0}>
          <Footer />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default ComponentParallax;
