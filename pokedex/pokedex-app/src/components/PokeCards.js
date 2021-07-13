import { PokeCard, ButtonsCard, AddButton, DetailsButton, PokeImage } from './styled.js'


const PokeCards = () => {
    return (

        <PokeCard>
            <PokeImage />

            <ButtonsCard>
                <AddButton>
                Adicionar
            </AddButton>

            <DetailsButton>
                Ver Detalhes
            </DetailsButton>
            </ButtonsCard>


        </PokeCard>
    )
}
export default PokeCards
