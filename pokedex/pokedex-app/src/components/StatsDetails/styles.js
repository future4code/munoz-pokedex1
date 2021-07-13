import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  border: 6px solid crimson;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const List = styled.li`
  list-style: none;
  padding-left: 16px;
  strong {
    text-transform: uppercase;
  }
`;
