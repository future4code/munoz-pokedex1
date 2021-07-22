import React, {useContext}  from 'react';
import PokeCards from '../../components/PokeCards';
import { useHistory } from 'react-router-dom';
import { goToPokedex } from '../../routes/coordinator';
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../components/GlobalState/GlobalStateContext';
import { PokeCardContainer } from './styled';

const HomePage = () => {
  const history = useHistory();

  const {pokemons} = useContext(GlobalStateContext)

  console.log(pokemons)

  return (
      <>
        <Header title={"Lista de Pokémons"}
          leftButtonFunction={()=>goToPokedex(history)} />
        
        <PokeCardContainer>
         {pokemons.map((poke) => {
            return (
              <PokeCards key={poke.name} pokemon={poke}/>
            )
        })}
        </PokeCardContainer>
        
      </>
  )
}
export default HomePage
