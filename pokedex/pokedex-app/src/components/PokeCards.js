import React from "react";
import { useHistory } from "react-router-dom";
import {
  PokeCard,
  ButtonsCard,
  AddButton,
  DetailsButton,
  PokeImage,
} from "./styled.js";

 const PokeCards = ({pokemon}) => {
  const history = useHistory();
  
  const goToDetailsPage = () => {
    history.push("/PokemonDetailsPage");
  };

  return (
    <PokeCard>
      <PokeImage />

      <ButtonsCard>
        <AddButton>Adicionar</AddButton>

        <DetailsButton onClick={goToDetailsPage}>Ver Detalhes</DetailsButton>
      </ButtonsCard>
    </PokeCard>
  );
};

export default PokeCards;

