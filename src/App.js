import React, {Component, useEffect, useState} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import PageButtons from "./components/PageButtons";

function App() {
        const [isLoading, setIsLoading] = useState(false)
        const [userInput, setUserInput] = useState("")
        const [pokemon, setPokemon] = useState([])
        const [noTouchPokemons, setNoTouchPokemons] = useState([])
        const [pokemonInfo, setPokemonInfo] = useState([])
        const [offset, setOffset] = useState(0)
        const [initialLoad, setInitialLoad] = useState(20)
        const [loadMore, setLoadMore] = useState(20)
        const [pokemonSearch, setPokemonSearch] = useState([])
        const [timeOut, setTimeOut] = useState(false)

        // this.handleShowMoreClick = this.handleShowMoreClick.bind(this)
        // this.handleSearchChange = this.handleSearchChange.bind(this)

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


    function loadNext() {
        return offset + initialLoad
    }

    function handleShowMoreClick(event) {
        const nextPokemon = loadNext();
        setOffset(nextPokemon)
    }
    function setFavorites(){
        // setPokemonInfo(localStorage.getItem('favoritePokmeon'))
        let dog = JSON.parse(localStorage.getItem('favoritePokemon'))
        let bingo = []
        dog.forEach(ele => {
            pokemonInfo.forEach(ele2 => {
                if(ele === ele2.name){
                     bingo.push(ele2)
                }
            })
        })
        console.log(bingo)
        setPokemonInfo(bingo)
    }
    useEffect(()=>{
        showNextSet()
    }, [offset])
    useEffect( () => {
        showNextSet()
        },[])

    async function showNextSet() {
        let url = "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=" + initialLoad;
        setIsLoading( true)
        let response = await fetch(url)
        setIsLoading(false)
        let data = await response.json()
        if(data.length) setPokemon(data.results)
        setPokemon(data.results)

        let tempPokeData = []
        data.results.forEach(async (ele) => {
            response = await fetch(ele.url)
            data = await response.json()
            tempPokeData.push(data)
            setPokemonInfo(tempPokeData)
            setNoTouchPokemons(tempPokeData)
        } )

    }


        return (
            <div className="center-align">
                <Header/>
                <SearchForm handleSearchChange={handleSearchChange} pokemonInfo={pokemonInfo}/>
                <button onClick={setFavorites}>Set Favorites</button>
                <div className="container">
                    {pokemonInfo.length?<PokemonCard pokemon={pokemon} pokemonInfo={pokemonInfo}/>:<h2>No Pokemon Available</h2>}
                </div>

                <div className="center-align" style={{"margin": "auto"}}>
                    <PageButtons handleShowMoreClick={handleShowMoreClick}/>
                </div>
            </div>
        );

}

export default App;
// Full Pokemon Object
// console.log(data.results[0].url)
