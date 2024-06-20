import { useState } from "react";
import { allHeroes } from "./HeroData";

function App() {
  return (
    <>
      {allHeroes.map((heroInfo, index) => {
        return <HeroCard heroInfo={heroInfo} key={index} />;
      })}
    </>
  );
}

const HeroCard = ({ heroInfo }) => {
  return (
    <>
      <p>Hero: {heroInfo.hero}</p>
      <div>
        <p>Info: {heroInfo.info}</p>
        <p>Villian: {heroInfo.villain}</p>
      </div>
    </>
  );
};

export default App;
