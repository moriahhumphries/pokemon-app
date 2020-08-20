import React from 'react';
import {Component} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import PageButtons from "./components/PageButtons";
import PopupCard from "./components/PopupCard";

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            userInput: '',
            pokemons: [],
            noTouchPokemons: [],
            pokemonInfo: [],
            offset: 0,
            initialLoad: 20,
            loadMore: 20,
            pokemonSearch: [],
            timeOut: false,
            pokemonUrl: "https://pokeapi.co/api/v2/pokemon/",
            pokemonID: 0
        }
        this.handleShowMoreClick = this.handleShowMoreClick.bind(this)
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    handleSearchChange(event) {
        let keyword = event.target.value
        let keywordLower = keyword.toLowerCase()
        this.setState({
            pokemonSearch: keyword,
        });


        let pokemonHolder = this.state.pokemonInfo.filter(ele => ele.name === keywordLower);

        if (pokemonHolder.length > 0) {
            this.setState({
                pokemonInfo: pokemonHolder
            });
        } else {
            this.setState({pokemonInfo: this.state.noTouchPokemons});
        }
    }


    loadNext() {
        return this.state.offset + this.state.initialLoad;
    }

    handleShowMoreClick(event) {
        const nextPokemon = this.loadNext();
        this.setState({offset: nextPokemon}, () => {
            this.showNextSet();
        })
    }

    componentDidMount() {
        this.showNextSet();
    }

    showNextSet() {
        let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.initialLoad;
        this.setState({isLoading: true})
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0].url)

                if (data) {
                    this.setState({
                        pokemons: data.results

                    }, () => {
                        this.state.pokemons.map(pokemon => {
                            fetch(pokemon.url)
                                .then(response => response.json())
                                .then(data => {
                                    if (data) {
                                        let temp = this.state.pokemonInfo
                                        temp.push(data)
                                        this.setState({
                                            isLoading: false,
                                            pokemonInfo: temp,
                                            noTouchPokemons: temp
                                        });
                                    }
                                })
                                .catch(console.log)
                        })

                    })
                }
            })
            .catch(console.log)
    }


    render() {

        return (
            <div>
                <Header/>
                <SearchForm handleSearchChange={this.handleSearchChange}
                            data={this.state}/>
                <div className="container">
                    <PokemonCard pokemon={this.state.pokemonInfo}/>
                </div>

                <div className="center-align" style={{"margin": "auto"}}>
                    <PageButtons handleShowMoreClick={this.handleShowMoreClick}
                                 data={this.state}/>
                </div>
            </div>
        )
    }
}

export default App;
// Full Pokemon Object
// console.log(data.results[0].url)
