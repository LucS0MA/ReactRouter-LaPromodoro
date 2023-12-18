import { useState, useEffect } from "react";
import DisplayCard from "../components/DisplayCard";

function Characters() {
  const [charactersInfos, setCharactersInfos] = useState([]);

  useEffect(() => {
    console.log("je suis dans le useEffect");
    fetch("https://github.com/Gwenaelbegot/cardGames/blob/main/cardGames.json")
      .then((res) => res.json())
      .then((data) => setCharactersInfos(data));
  }, []);

  return (
    <div>
      {console.log("je suis dans le return", charactersInfos)}
      {charactersInfos.map((characterInfo) => {
        return (
          <DisplayCard
            key={characterInfo.id}
            name={characterInfo.name}
            image={characterInfo.image}
            id={characterInfo.id}
          />
        );
      })}
    </div>
  );
}
export default Characters;