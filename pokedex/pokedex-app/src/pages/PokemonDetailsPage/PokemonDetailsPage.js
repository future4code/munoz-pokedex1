import ImagesDetails from "../../components/ImagesDetails";
import MenuDetails from "../../components/MenuDetails";
import StatsDetails from "../../components/StatsDetails";
import TypesAndMovesDetails from "../../components/TypesAndMovesDetails";
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
