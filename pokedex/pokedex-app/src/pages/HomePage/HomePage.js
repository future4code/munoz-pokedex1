import React, {useContext}  from 'react';
import PokeCards from '../../components/PokeCards';
//import { ScreenHome } from '../styled';
import { useHistory } from 'react-router-dom';
import { goToPokedex } from '../../routes/coordinator';

//import { ButtonPokeList } from "./styles";

import Header from '../../components/Header/Header'
import GlobalStateContext from '../../components/GlobalState/GlobalStateContext';

//import pokemonLogo from '../../Image/pokemonLogo.png'
//import { PokemonLogo } from '../../components/Header/styled';



const HomePage = () => {
  const history = useHistory();


  const {pokemons} = useContext(GlobalStateContext)

  console.log(pokemons)

  return (

    
      <>
        <Header title={'Lista de Pokemons'}
          leftButtonFunction={()=>goToPokedex(history)} />
       
       
           {/*<PokemonLogo src={pokemonLogo}></PokemonLogo>*/}
          
          
         {
          pokemons.map((poke) => {
            return (
              <PokeCards key={poke.name} pokemon={poke}/>
            )
        })}
        

      </>
  )
}
export default HomePage
