import styled from "styled-components";

export const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 8px 8px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 60%;
  height: 90%;
  margin-bottom: 2vh;
  border: #4169e1 solid 3px;
  padding: 8px;
  &:hover{
    -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.2);
        border: 2px solid #CD0000;

}`
  

export const ButtonsCard = styled.div`
  display: flex;
  width: 96%;
  margin: 8px auto;
  justify-content: space-between;
   button{
     border: #4169e1 solid 1px;
     font-size: 12px;
     padding: 6px;
     border-radius: 6px;
     &:hover{
       background-color: #4169e1;
       color: #FFFFFF;
     }
   }
`;



export const PokeImage = styled.img`
  border: #ffff00 solid 3px;
  border-radius: 20px;
  height: 100%;
  &:hover{
    border: 2px solid #4169e1;
  }
`;
export const PokeCardContainer = styled.div`
margin-top: 50px;
justify-items: center;
width: 100%;
display: grid;
grid-template-columns: 2fr 2fr 2fr 2fr; 
grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
gap: 30px 50px; 
height: 100vh;
`
