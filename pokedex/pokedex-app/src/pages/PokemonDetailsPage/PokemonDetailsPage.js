import TypesAndMovesDetails from "../../components/TypesAndMovesDetails";
import ImagesDetails from "../../components/ImagesDetails";
import StatsDetails from "../../components/StatsDetails";
import MenuDetails from "../../components/MenuDetails";
import { Container } from "./styles";


const PokemonDetailsPage = () => {
  


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
