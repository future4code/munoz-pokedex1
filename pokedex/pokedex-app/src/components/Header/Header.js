import React from 'react'
import { HeaderContainer, LeftButton, RightButton, PokemonLogo, Title } from './styled';
import pokemonLogo from '../../Image/pokemonLogo.png'
import { goToPokedex } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const Header = ({ title, leftButtonFunction, rightButton }) => {

	const history = useHistory()

	const leftButtonText = () => {

		switch (title) {
			case "Lista de Pokémons":
				return "Ir para Pokédex"
			case "Pokédex":
				return "Voltar para lista de pokemons"
			default:
				return "Voltar"
		}
	}

	return (
		<HeaderContainer>

			< PokemonLogo src={pokemonLogo} />

			<LeftButton onClick={leftButtonFunction}>

				{leftButtonText()}

			</LeftButton>


			{rightButton &&
				<RightButton onClick={() => goToPokedex(history)}>

					Ir para Pokédex

				</RightButton>}

		</HeaderContainer>
	)
}
export default Header