import React from "react";
import { Container, List } from "./styles";

const StatsDetails = () => {
  return (
    <Container>
      <h2>Stats</h2>
      <ul>
        <List>
          <strong>hp: </strong>
          <span> 60</span>
        </List>
        <List>
          <strong>attack: </strong>
          <span> 60</span>
        </List>
        <List>
          <strong>defense: </strong>
          <span> 60</span>
        </List>
        <List>
          <strong>special-attack: </strong>
          <span> 60</span>
        </List>
        <List>
          <strong>special-defense: </strong>
          <span> 60</span>
        </List>
        <List>
          <strong>speed: </strong>
          <span> 60</span>
        </List>
      </ul>
    </Container>
  );
};

export default StatsDetails;
