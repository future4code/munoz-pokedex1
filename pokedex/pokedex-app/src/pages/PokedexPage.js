import PokeCards from "../components/PokeCards"
import { ScreenHome } from './styled'
import { useHistory } from 'react-router-dom'



const PokedexPage = () => {
  const history = useHistory()
  const goToHomePage = () => {
    history.push('/')

  }
  return (
    <ScreenHome>
      <header>
        <button onClick={goToHomePage}>
          Voltar para lista de pokémons
        </button>
        <h2>
          Minha Pokédex
        </h2>
      </header>
      <PokeCards />
    </ScreenHome>
  )
}
export default PokedexPage

