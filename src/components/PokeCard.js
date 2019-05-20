import React from "react";

const PokeCard = ({ obj: { id, name, type, base_experience } }) => {
  const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail";
  const padToThree = num => (num <= 999 ? `00${num}`.slice(-3) : num);
  return (
    <div className="PokeCard">
      <h1 className="PokeCard-title">{name}</h1>
      <div className="PokeCard-image">
        <img src={`${POKE_API}/${padToThree(id)}.png`} alt={name} />
      </div>
      <div className="PokeCard-data">Type: {type}</div>
      <div className="PokeCard-data">EXP: {base_experience}</div>
    </div>
  );
};

export default PokeCard;
