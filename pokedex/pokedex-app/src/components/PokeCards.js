import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import { goToDetailPage } from "../routes/coordinator.js";
import GlobalStateContext from '../components/GlobalState/GlobalStateContext'
import {
  PokeCard,
  ButtonsCard,
  PokeImage,
  PokeCardContainer,
  ImageContainer
} from "./styled.js";

 const PokeCards = ({pokemon, isPokedex}) => {
  const history = useHistory();

  const {pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext)
  
  const addPokemon = () => {
		const pokeIndex = pokemons.findIndex((poke)=> poke.name === pokemon.name)
		const newListPokemons = [...pokemons]
		newListPokemons.splice(pokeIndex, 1)
		
		
		const newListPokedex = [...pokedex, pokemon]
		const orderedPokemonList = newListPokedex.sort((a,b)=>{
			return a.id - b.id
		})

		setPokedex(orderedPokemonList)
		setPokemons(newListPokemons)
	}

  const removePokemon = () => {
		const pokeIndex = pokedex.findIndex((poke)=> poke.name === pokemon.name)
		const newListPokedex = [...pokedex]
		newListPokedex.splice(pokeIndex, 1)
		const newListPokemons = [...pokemons, pokemon]

		const orderedPokemonList = newListPokedex.sort((a,b)=>{
			return a.id - b.id
		})

		setPokedex(orderedPokemonList)
		setPokemons(newListPokemons)
	}


  return (

    <PokeCardContainer>
      <PokeCard>
      <ImageContainer>
        <PokeImage 
        src={pokemon.sprites && pokemon.sprites.front_default}
        alt={pokemon.name}
      
        />
      </ImageContainer>
      

      <ButtonsCard>
        <button onClick={isPokedex ? removePokemon : addPokemon}>
          {isPokedex ? 'Remover' : 'Adicionar'}
        </button>

        <button onClick={()=>goToDetailPage(history, pokemon.name)}>
          detalhes
        </button>
      </ButtonsCard>
    </PokeCard>
    </PokeCardContainer>
    
  );
};

export default PokeCards;

