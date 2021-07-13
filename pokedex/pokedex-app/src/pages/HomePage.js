import PokeCards from "../components/PokeCards";
import { ScreenHome } from './styled';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const Title = styled.h1`
font-family: cursive;
letter-spacing: 4px;
font-size: 40px;
text-align: center;
color: #FFFF00;
-webkit-text-stroke: 1.4px #4169E1;
`
const ButtonPokeList = styled.button`
background-color: #FFFF00;
color: #4169E1;
width: 160px;
height: 30px;
border: 2px solid #4169E1;
font-family: cursive;
font-weight: bold;
border-radius: 10px;
`


const HomePage = () => {

  const history = useHistory()

  const goToPokedex = () => {
    history.push('/PokedexPage')
  }

  const goToPokemonDetails = () => {

    history.push('/PokemonDetailsPage')
  }

  return (

    <ScreenHome>

      <header>

        <ButtonPokeList
          onClick={goToPokedex}>

          Ver minha pokedex
        </ButtonPokeList>


        <Title>
          Lista de Pokémons
        </Title>

      </header>

      <PokeCards />

    </ScreenHome>
  )
}
export default HomePage