import  PokeCards  from "../components/PokeCards"
import {ScreenHome} from './styled'
import {useHistory} from 'react-router-dom'




const HomePage = () =>{

    const history = useHistory()

    const goToPokedex = () => {
        history.push('/PokedexPage')
    }
    
    return(
        <ScreenHome>
              <header>
   
        <button  onClick={goToPokedex}>
          Ver minha pokedex
        </button>
        <h2>
          Lista de Pokémons
        </h2>
      </header>
            <PokeCards/>
        </ScreenHome>
    )
}
export default HomePage