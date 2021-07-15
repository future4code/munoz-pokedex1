import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../../constants/url';
import GlobalStateContext from './GlobalStateContext';


const GlobalState = (props) => {

    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    console.log(pokemons)


    useEffect(() => {
        getPokemonNames()
    }, []);

    useEffect(() => {
        const pokeList = []
        pokemonNames.forEach((item) => {
            axios.get(item.url)
                .then((res) => {
                    pokeList.push(res.data)
                    if (pokeList.length === 20) {
                        const orderedList = pokeList.sort((a, b) => {
                            return (
                                a.id - b.id
                            )
                        })
                        setPokemons(orderedList)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        })
    }, [pokemonNames])

    const getPokemonNames = () => {
        axios
            .get(`${url}/pokemon`)
            .then((res) => {
                // console.log(res)
                setPokemonNames(res.data.results)
            })
            .catch((err) => {
                // console.log(err.message)
            })
    };

    
    const data = { pokemons, setPokemons, pokedex, setPokedex }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState