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
      <PokeImage 
        src={pokemon.sprites && pokemon.sprites.front_default}
        alt={pokemon.name}
      
      />

      <ButtonsCard>
        <AddButton>Adicionar</AddButton>

        <DetailsButton onClick={()=>goToDetailsPage(history, pokemon.name)}>Ver Detalhes</DetailsButton>
      </ButtonsCard>
    </PokeCard>
  );
};

export default PokeCards;

