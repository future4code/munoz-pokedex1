import TypesAndMovesDetails from "../../components/TypesAndMovesDetails";
import ImagesDetails from "../../components/ImagesDetails";
import StatsDetails from "../../components/StatsDetails";
import MenuDetails from "../../components/MenuDetails";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../../components/GlobalState/GlobalStateContext";

const PokemonDetailsPage = () => {
  const {name} = useParams()

  const {pokemons} = useContext(GlobalStateContext)

  useEffect(()=>{
    
  })

  return (
    <>
      <MenuDetails />
      <Container>
        <ImagesDetails />
        <StatsDetails />
        <TypesAndMovesDetails />
      </Container>
    </>
  );
};
export default PokemonDetailsPage;
