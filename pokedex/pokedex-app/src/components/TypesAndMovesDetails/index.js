import React from "react";
import { useContext } from "react";
import GlobalStateContext from "../GlobalState/GlobalStateContext";
import { Container, PokemonType, Moves } from "./styles";

const TypesAndMovesDetails = () => {
  const { pokemons } = useContext(GlobalStateContext);
  return (
    <Container>
      <PokemonType>
        <h2>
          <strong>
            type 1: <span>{pokemons.type}</span>
          </strong>
        </h2>
        <h2>
          <strong>
            type 2: <span>{pokemons.type}</span>
          </strong>
        </h2>
      </PokemonType>
      <Moves>
        <h2>moves</h2>
        <ul>
          <li>{pokemons.moves}</li>
          <li>{pokemons.moves} </li>
          <li>{pokemons.moves}</li>
        </ul>
      </Moves>
    </Container>
  );
};

export default TypesAndMovesDetails;
