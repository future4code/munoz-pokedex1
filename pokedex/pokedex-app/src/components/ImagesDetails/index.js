import React, { useContext } from "react";
import { Container, Content } from "./styles";
import GlobalStateContext from "../GlobalState/GlobalStateContext";
// componente que irá ficar as imagens de frente e de tráz do pokemon

const ImagesDetails = () => {
  const { pokemons } = useContext(GlobalStateContext);
  return (
    <Container>
      <Content>
        <img src="pokemons.sprites.front_default" alt="pokemons.name" />
      </Content>
      <Content>
        <img src="poekmons.sprites.front_default" alt="pokemons.name" />
      </Content>
    </Container>
  );
};

export default ImagesDetails;
