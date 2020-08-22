import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import PageButtons from "./components/PageButtons";

function App() {

    // Initializing state, refactored from class syntax to use Hooks
    const [pokemon, setPokemon] = useState([])
    // Original Pokemon Full Array
    const [noTouchPokemons, setNoTouchPokemons] = useState([])
    // Array with all information from Pokemon
    const [pokemonInfo, setPokemonInfo] = useState([])
    const [initialLoad, setInitialLoad] = useState(151)


    const buttonStyle = {
        "display": "inline-block",
        "backgroundColor": "red",
        "fontWeight": "bold",
        "marginLeft": "5px",
        "marginBottom": "20px"
    }

    // Handler for search function, converts user input to lowercase
    function handleSearchChange(event) {
        const keyword = event.target.value
        const keywordLower = keyword.toLowerCase()

        // Takes user's input, and compares to each element in array
        const pokemonHolder = noTouchPokemons.filter(ele => ele.name.includes(keywordLower));

        // Checks that array is not empty
        if (pokemonHolder.length) {
            setPokemonInfo(pokemonHolder);
        } else {
            // Reset to original array
            setPokemonInfo(noTouchPokemons);
        }
    }


    // Removes list of pokemon that user added to local storage favorites
    function clearFavorites() {
        localStorage.clear()
        setPokemonInfo(noTouchPokemons)
    }


    function setFavorites() {
        // Parse JSON string to turn into array
        const favoritePokemon = JSON.parse(localStorage.getItem('favoritePokemon'))
        const favPokeHolder = []
        // Checks if name in favorites matches name in origin array
        favoritePokemon.forEach(ele => {
            pokemonInfo.forEach(ele2 => {
                if (ele === ele2.name) {
                    favPokeHolder.push(ele2)
                }
            });
        });
        // Updates list with favorite
        setPokemonInfo(favPokeHolder)
    }

    // Return getOriginSet function
    useEffect(() => {
        getOriginalSet()

    }, []);


    // Fetches Pokemon, sets data.
    async function getOriginalSet() {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=" + initialLoad;
        // Awaiting response until fetch is complete
        let response = await fetch(url)
        let data = await response.json()
        // Checking if fetch has been completed
        if (data.length) setPokemon(data.results)
        // Sets pokemons and their URLs
        setPokemon(data.results)
        // Creates array of results from fetch
        const tempPokeData = data.results.map(async (ele) => {
            response = await fetch(ele.url)
            return response.json()
        });
        // Awaiting results
        const newData = await Promise.all(tempPokeData)
        // Setting results once resolved
        setPokemonInfo(newData)
        setNoTouchPokemons(newData)

    }


    return (
        <div className="center-align">
            <Header/>
            <SearchForm handleSearchChange={handleSearchChange} pokemonInfo={pokemonInfo}/>
            <button onClick={setFavorites} style={buttonStyle} className="btn button">Show Favorites<i
                className="fas fa-heart" style={{"marginLeft": "10px"}}></i></button>
            <button className="btn button" style={buttonStyle} onClick={clearFavorites}>Clear Favorites</button>
            <div className="container">
                {pokemonInfo.length ? <PokemonCard pokemon={pokemon} pokemonInfo={pokemonInfo}/> :
                    <h2 className="description" style={{"color": "white"}}>Loading...</h2>}
            </div>

            <div className="center-align" style={{"margin": "auto"}}>
                <PageButtons/>
            </div>
        </div>
    );

}

export default App;

