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

export const AddButton = styled.button`
  border-radius: 10px;
  /* background-color: #FFFF00; 
 color: #4169E1; 
 font-family: cursive; 
 font-weight: bold; */
  border: 2px solid #4169e1;
`;
export const DetailsButton = styled.button`
  border-radius: 10px;
  /* background-color: #FFFF00;
 color: #4169E1;
 font-family: cursive;
 font-weight: bold; */
  border: 2px solid #4169e1;
`;

export const PokeImage = styled.img`
  border: #ffff00 solid 3px;
  border-radius: 20px;
  
  
`;
