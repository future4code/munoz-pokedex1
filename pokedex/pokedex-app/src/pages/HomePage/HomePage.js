import React, {useContext}  from 'react';
import PokeCards from '../../components/PokeCards';
import { ScreenHome } from '../styled';
import { useHistory } from 'react-router-dom';
import { ButtonPokeList } from "./styles";
import {Header} from '../../components/Header/styled'
import GlobalStateContext from '../../components/GlobalState/GlobalStateContext';
import pokemonLogo from '../../Image/pokemonLogo.png'
import { PokemonLogo } from '../../components/Header/styled';



const HomePage = () => {
  const history = useHistory();

  const goToPokedex = () => {
    history.push('/PokedexPage');
  }

  const goToPokemonDetails = () => {
    history.push('/PokemonDetailsPage');
  }

  const {pokemons} = useContext(GlobalStateContext)

  console.log(pokemons)

  return (

    
      <>
        <Header>
       <div>
           <PokemonLogo src={pokemonLogo}></PokemonLogo>
          <ButtonPokeList
          onClick={goToPokedex}>
            Ver minha pokedex
        </ButtonPokeList>
       </div>

        </Header>
         
        <ScreenHome>

         {
          pokemons.map((poke) => {
            return (
              <PokeCards key={poke.name} pokemon={poke}/>
            )
        })}

       



       
      </ScreenHome>
    </>
  )
}
export default HomePage
