import React, {useState, useEffect} from "react";
import './../App.css';

const PokemonDetail = () => {
    useEffect(() => {
        getSinglePokemon();


    }, []);

    const [items, setItems] = useState([])

    const getSinglePokemon = async () => {
        const data = await fetch(
            "https://pokeapi.co/api/v2/pokemon"
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    }

    return (
       <div>
           {items.map(item => (
           <h1 key={item.id}>{item.name}</h1>
       ))}
       </div>
    )
}

export default PokemonDetail;