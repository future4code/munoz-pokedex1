import { useHistory } from "react-router";
import { Menu } from "./styles";
import GlobalStateContext from "../GlobalState/GlobalStateContext";
import { useContext } from "react";

// menu com o nome do pokemon e botões de navegação
const MenuDetails = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);
  const backToPage = () => {
    history.goBack();
  };
  return (
    <Menu>
      <button onClick={backToPage}>voltar</button>

      <h1>{pokemons.name}</h1>

      <button>Adicionar/remover</button>
    </Menu>
  );
};

export default MenuDetails;
