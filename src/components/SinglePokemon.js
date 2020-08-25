import React, {useState, useEffect} from "react";
import './../App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const SinglePokemon = () => {
    useEffect(() => {
        getSinglePokemon();


    }, []);

    const [items, setItems] = useState([])

    const getSinglePokemon = async () => {
        const data = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    }

    return (
        <div>
            {items.map((item, ind) => (
                <h1 key={ind}>
                    <Router>
                        <Link to={`/single/${ind + 1}`} style={{"color": "white"}}>
                            <p>{item.name}</p>
                        </Link>
                    </Router>
                </h1>
            ))}
        </div>
    )
}

export default SinglePokemon;