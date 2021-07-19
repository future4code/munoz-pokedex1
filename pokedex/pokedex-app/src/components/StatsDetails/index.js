import React, { useContext } from "react";
import { Container, List } from "./styles";
import GlobalStateContext from "../GlobalState/GlobalStateContext";
const StatsDetails = () => {
  const { pokemons } = useContext(GlobalStateContext);
  return (
    <Container>
      <h2>Stats</h2>
      <ul>
        <List>
          <strong>hp: </strong>
          <span> {pokemons.stats.hp}</span>
        </List>
        <List>
          <strong>attack: </strong>
          <span> {pokemons.stats.attack}</span>
        </List>
        <List>
          <strong>defense: </strong>
          <span> {pokemons.stats.defense}</span>
        </List>
        <List>
          <strong>special-attack: </strong>
          <span> {pokemons.stats.specialAttack}</span>
        </List>
        <List>
          <strong>special-defense: </strong>
          <span> {pokemons.stats.specialDefense}</span>
        </List>
        <List>
          <strong>speed: </strong>
          <span> {pokemons.stats.speed}</span>
        </List>
      </ul>
    </Container>
  );
};

export default StatsDetails;
