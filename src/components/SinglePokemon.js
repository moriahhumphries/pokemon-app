import React, {useState, useEffect} from "react";
import './../App.css';


const SinglePokemon = ({match}) => {
    useEffect(() => {
        getSinglePokemon();
            console.log(match)
        }
    , []);

    const [item, setItem] = useState([])

    const getSinglePokemon = async () => {
        const data = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${match.params.ind}`
        );
        const item = await data.json();
        setItem(item);
        console.log(item);
    }


    return (
        <div>
            <h1>{item.name}</h1>
            <h1>{item.id}</h1>
        </div>
    )
}

export default SinglePokemon;