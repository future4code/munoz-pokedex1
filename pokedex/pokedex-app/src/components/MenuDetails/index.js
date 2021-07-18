import { useHistory } from "react-router";
import { Menu } from "./styles";

// menu com o nome do pokemon e botões de navegação
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
