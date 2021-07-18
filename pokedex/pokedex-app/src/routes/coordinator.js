export const goToHomePage = (history) => {
    history.push("/")
}

export const goToPokedex = (history) => {
    history.push("/pokedexPage")
}

export const goToDetailPage = (history, name) => {
    history.push(`/pokemonDetailsPage/${name}`)
}

