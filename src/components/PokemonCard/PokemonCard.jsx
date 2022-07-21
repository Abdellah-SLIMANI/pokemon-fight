import React, {useEffect, useState} from 'react'
import axios from "axios";

export default function PokemonCard(props){
    const [image, setimage] = useState("")
    useEffect(() => {
        axios.get(props.url)
            .then(res => {
                console.log(`response of ${props.name}:`, res)
                setimage(res.data.sprites.back_default)
            })
    },[])
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={image} alt={props.name}/>
        </div>
    );
}