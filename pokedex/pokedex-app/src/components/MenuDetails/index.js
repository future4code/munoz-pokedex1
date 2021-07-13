import { useHistory } from "react-router";
import { Menu } from "./styles";

const MenuDetails = () => {
  const history = useHistory();
  const backToPage = () => {
    history.goBack();
  };
  return (
    <Menu>
      <button onClick={backToPage}>voltar</button>

      <h1>Charizard</h1>

      <button>Adicionar/remover</button>
    </Menu>
  );
};

export default MenuDetails;
