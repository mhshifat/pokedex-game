import React, { Component } from "react";

import PokeCard from "./PokeCard";

class Pokedex extends Component {
  state = {
    pokedexObj: this.props.pokemons
  };

  render() {
    const { pokedexObj } = this.state;
    return (
      <div className="Pokedex">
        <h1
          className={this.props.isWinner ? "Pokedex-winner" : "Pokedex-loser"}
        >
          {this.props.isWinner ? "Wining Hand" : "Losing Hand"}
        </h1>
        <h4>Total experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {pokedexObj.map(p => (
            <PokeCard key={p.id} obj={p} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
