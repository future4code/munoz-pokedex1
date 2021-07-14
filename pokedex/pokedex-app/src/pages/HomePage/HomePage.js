import React, {useContext}  from 'react';
import PokeCards from '../../components/PokeCards';
import { ScreenHome } from '../styled';
import { useHistory } from 'react-router-dom';
import { Title, ButtonPokeList } from "./styles";
import GlobalStateContext from '../../components/GlobalState/GlobalStateContext';



const HomePage = () => {
  const history = useHistory();

  const goToPokedex = () => {
    history.push('/PokedexPage');
  }

  const goToPokemonDetails = () => {
    history.push('/PokemonDetailsPage');
  }

  const pokemons = useContext(GlobalStateContext)

  console.log(pokemons)

  return (

    <header>
      <ScreenHome>
        {/* {pokemons.map((poke) => {
          return (
            <PokeCards key={poke.name} pokemon={poke}/>
          )
        })} */}

        <ButtonPokeList
          onClick={goToPokedex}>

          Ver minha pokedex
        </ButtonPokeList>

<PokeCards>
  
</PokeCards>

        <Title>
          Lista de Pokémons
        </Title>
      </ScreenHome>
    </header>
  )
}
export default HomePage
