import { useState } from "react";
import { allHeroes } from "./HeroData";
import "./App.css";

function App() {
  const [favourites, setFavourites] = useState([]);

  const handleAddToFavs = (hero) => {
    let newFaveArr = [...favourites];
    newFaveArr.push(hero);
    setFavourites(newFaveArr);
  };

  const handleRemoveFromFavs = (index) => {
    let newFaveArr = [...favourites];
    newFaveArr.splice(index, 1);
    setFavourites(newFaveArr);
  };

  return (
    <>
      <div className="header">
        <h1>Heroes</h1>
      </div>
      <div className="container">
        <h3>Favourites</h3>
        <div className="favourites-list">
          {favourites.map((favHero, index) => (
            <Favourites
              key={index}
              favHeroData={favHero}
              removeFave={() => handleRemoveFromFavs(index)}
            />
          ))}
        </div>
        <h3>All Heroes</h3>
        <div className="hero-list">
          {allHeroes.map((heroInfo, index) => (
            <HeroCard
              heroInfo={heroInfo}
              key={index}
              favFunc={handleAddToFavs}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const Favourites = ({ favHeroData, removeFave }) => {
  return (
    <div className="card">
      <p>{favHeroData.hero}</p>
      <button className="btn" onClick={removeFave}>
        Remove
      </button>
    </div>
  );
};

const HeroCard = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="card">
      <p>Hero: {props.heroInfo.hero}</p>
      {show && (
        <div>
          <p>Info: {props.heroInfo.info}</p>
          <p>Villain: {props.heroInfo.villain}</p>
        </div>
      )}
      <button className="btn" onClick={() => setShow(!show)}>
        {show ? "Hide Info" : "Show Info"}
      </button>
      <button className="btn" onClick={() => props.favFunc(props.heroInfo)}>
        Add to Favourites
      </button>
    </div>
  );
};

export default App;
