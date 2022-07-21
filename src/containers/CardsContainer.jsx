import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PokemonCard from "../components/PokemonCard/PokemonCard";
import "./CardsContainer.css"

export default function CardsContainer(){
    const [pokemons, setPokemons] = useState([])
    const [pokePair, setPokePair] = useState({poke1: "", poke2: ""})

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                console.log(res.data)
                setPokemons(res.data.results)
            })
            .catch(err => console.log("an Error happened on the api call:", err))
    },[])

    const fight = (poke1 , poke2) => {
        if(Math.floor(Math.random()*10) > 5){
            return poke1 // TODO: axios delete function
        }
        return poke2 // TODO: axios delete fucntion
    }

    return(
        <>
            {<div className={'fightsContainer'}><p>{pokePair.poke2 ? pokePair.poke1.name : ''}</p><span>VS</span>
                <p>{pokePair.poke2 ? pokePair.poke2.name : ''}</p>
            <button className={'fight btn'}>FIGHT</button></div>}
        <div className={'cardsContainer'}>
            <></>
            {pokemons.sort((a,b) => a.name.localeCompare(b.name)).map(pokemon => {
                return <PokemonCard
                            name={pokemon.name}
                            url={pokemon.url}
                            pokePair = {pokePair}
                            setPokePair = {setPokePair}
                    />
            })}
        </div>
    </>
    )
}