import { useState } from "react";
import { allHeroes } from "./HeroData";

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
      <div>
        <h3>Favourites</h3>
        {favourites.map((favHero, index) => {
          return (
            <Favourites
              key={index}
              favHeroData={favHero}
              removeFave={() => handleRemoveFromFavs(index)}
            />
          );
        })}
      </div>
      <h3>All Heroes</h3>
      {allHeroes.map((heroInfo, index) => {
        return (
          <HeroCard heroInfo={heroInfo} key={index} favFunc={handleAddToFavs} />
        );
      })}
    </>
  );
}

const Favourites = ({ favHeroData, removeFave }) => {
  return (
    <div>
      <p>{favHeroData.hero}</p>
      <button onClick={removeFave}>X</button>
    </div>
  );
};

const HeroCard = (props) => {
  const [show, setShow] = useState(false);
  console.log(props);
  return (
    <>
      <p>Hero: {props.heroInfo.hero}</p>

      {show && (
        <div>
          <p>Info: {props.heroInfo.info}</p>
          <p>Villian: {props.heroInfo.villain}</p>
        </div>
      )}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Info" : "Show Info"}
      </button>
      <button onClick={() => props.favFunc(props.heroInfo)}>
        Add to Favourites
      </button>
    </>
  );
};

export default App;
