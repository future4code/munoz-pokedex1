import React, {useContext}from 'react'
import PokeCards from "../../components/PokeCards"
import { PokeCardContainer } from './styled'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToHomePage } from '../../routes/coordinator'
import GlobalStateContext from '../../components/GlobalState/GlobalStateContext'



const PokedexPage = () => {
  const history = useHistory()
  const {pokedex}= useContext(GlobalStateContext)

  return (
    <>
      <Header 
      title={'Pokedex'}
      leftButtonFunction={()=>goToHomePage(history)}
      />
       <PokeCardContainer>
      {
          pokedex && pokedex.map((poke) => {
            return (
              <PokeCards key={poke.name} isPokedex pokemon={poke}/>
            )
        })}
        </PokeCardContainer>
      

    </>
  )
}
export default PokedexPage

