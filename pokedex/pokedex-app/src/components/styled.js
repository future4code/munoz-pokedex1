import styled from "styled-components";

export const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.2);
  border: #4169e1 solid 3px;
  border-radius: 20px;
  width: 60%;
  height: 80%;
  
`;
export const ButtonsCard = styled.div`
  display: flex;
  justify-content: space-between;
`;



export const PokeImage = styled.img`
  border: #ffff00 solid 3px;
  border-radius: 20px;

`;
export const PokeCardContainer = styled.div`
margin-top: 50px;
justify-items: center;
width: 100%;
display: grid;
grid-template-columns: 2fr 2fr 2fr 2fr; 
grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
gap: 30px 20px; 
`
export const ImageContainer =styled.div`
`