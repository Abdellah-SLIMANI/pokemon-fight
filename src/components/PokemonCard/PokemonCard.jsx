import React, {useEffect, useState} from 'react'
import axios from "axios";
import './PokemonCard.css'
import {click} from "@testing-library/user-event/dist/click";

export default function PokemonCard(props){
    const [image, setimage] = useState("")
    const [flag, setFlag] = useState(true)
    useEffect(() => {
        axios.get(props.url)
            .then(res => {
                console.log(`response of ${props.name}:`, res)
                setimage(res.data.sprites.back_default)
            })
    },[])

    const getIDs= () => {
        axios.get(props.url)
            .then(res => {
                if(flag){
                    props.setPokePair({...props.pokePair, poke1: res.data})
                    setFlag(!flag)
                }else{
                    props.setPokePair({...props.pokePair, poke2: res.data})
                    setFlag(flag)
                }
            })
    }

    console.log("pokes", props.pokePair)
    return (
        <div className={"cardConatainer"} onClick={()=> getIDs()}>
            <h1>{props.name}</h1>
            <img src={image} alt={props.name}/>
        </div>
    );
}