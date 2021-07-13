import React from "react";
import { Container, PokemonType, Moves } from "./styles";

const TypesAndMovesDetails = () => {
  return (
    <Container>
      <PokemonType>
        <h2>
          <strong>
            type 1: <span>fogo</span>
          </strong>
        </h2>
        <h2>
          <strong>
            type 2: <span>voador</span>
          </strong>
        </h2>
      </PokemonType>
      <Moves>
        <h2>moves</h2>
        <ul>
          <li>blaze</li>
          <li>solar power</li>
          <li>drought</li>
        </ul>
      </Moves>
    </Container>
  );
};

export default TypesAndMovesDetails;
