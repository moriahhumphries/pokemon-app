import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import PageButtons from "./components/PageButtons";

function App() {

        const [userInput, setUserInput] = useState("")
        const [pokemon, setPokemon] = useState([])
        const [noTouchPokemons, setNoTouchPokemons] = useState([])
        const [pokemonInfo, setPokemonInfo] = useState([])
        const [offset, setOffset] = useState(0)
        const [initialLoad, setInitialLoad] = useState(151)
        const [pokemonSearch, setPokemonSearch] = useState([])
        const [favoritePokemon, setFavoritePokemon] = useState([])

    const buttonStyle = {
        "display": "inline-block",
        "backgroundColor": "red",
        "fontWeight": "bold",
        "marginLeft": "5px",
        "marginBottom": "20px"
    }


    function handleSearchChange(event){
        let keyword = event.target.value
        let keywordLower = keyword.toLowerCase()
        setPokemonSearch(keyword)

        let pokemonHolder = pokemonInfo.filter(ele => ele.name === keywordLower);

        if (pokemonHolder.length) {
            setPokemonInfo(pokemonHolder);
        } else {
            setPokemonInfo(noTouchPokemons);
        }
    }

    function clearFavorites(){
        localStorage.clear()
        setPokemonInfo(noTouchPokemons)
    }


    function setFavorites(whichButton){

        // setPokemonInfo(localStorage.getItem('favoritePokmeon'))
        let favoritePokemon = JSON.parse(localStorage.getItem('favoritePokemon'))
        let favPokeHolder = []
        favoritePokemon.forEach(ele => {
            pokemonInfo.forEach(ele2 => {
                if(ele === ele2.name){
                    favPokeHolder.push(ele2)
                }
            })
        })

        setPokemonInfo(favPokeHolder)
    }

    useEffect( () => {
        getOriginalSet()

        },[])

    async function getOriginalSet() {
        const url = "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=" + initialLoad;
        let response = await fetch(url)
        let data = await response.json()
        if(data.length) setPokemon(data.results)
        setPokemon(data.results)
        const tempPokeData = data.results.map(async (ele) =>{
            response = await fetch(ele.url)
            return response.json()
        })
        const newData = await Promise.all(tempPokeData)
        setPokemonInfo(newData)
        setNoTouchPokemons(newData)

    }


        return (
            <div className="center-align">
                <Header/>
                <SearchForm handleSearchChange={handleSearchChange} pokemonInfo={pokemonInfo}/>
                <button onClick={setFavorites} style={buttonStyle} className="btn button">Show Favorites<i className="fas fa-heart" style={{"marginLeft": "10px"}}></i></button>
                <button className="btn button" style={buttonStyle} onClick={clearFavorites}>Clear Favorites</button>
                <div className="container">
                    {pokemonInfo.length?<PokemonCard pokemon={pokemon} pokemonInfo={pokemonInfo}/>:<h2>Loading...</h2>}
                </div>

                <div className="center-align" style={{"margin": "auto"}}>
                    <PageButtons/>
                </div>
            </div>
        );

}

export default App;

