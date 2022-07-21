import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PokemonCard from "../components/PokemonCard/PokemonCard";

export default function CardsContainer(){
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                console.log(res.data)
                setPokemons(res.data.results)
            })
            .catch(err => console.log("an Error happened on the api call:", err))
    },[])

    return(
        <div>
            {pokemons.sort((a,b) => a.name.localeCompare(b.name)).map(pokemon => {
                return <PokemonCard name={pokemon.name} url={pokemon.url}/>
            })}
        </div>
    )
}