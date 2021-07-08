import {PokeCard, ActionsButtons, PokeImage} from './styled'


const PokeCards = () => {
    return (

        <PokeCard>
            <PokeImage/>
            
            <ActionsButtons>
                <button>Adicionar</button>
                <button>Ver detalhes</button>
            </ActionsButtons>
            

        </PokeCard>
    )
}
export default PokeCards
