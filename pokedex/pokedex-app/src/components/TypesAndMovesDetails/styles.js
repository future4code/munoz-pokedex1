import styled from "styled-components";

export const Container = styled.div`
  width: 330px;
  height: 500px;
  max-width: 300px;
  margin: 0 auto;
`;

export const PokemonType = styled.section`
  border: 6px solid crimson;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 24px;
  padding: 8px;
  h2 {
    margin: 4px;
  }
`;

export const Moves = styled.section`
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 6px solid crimson;
`;
