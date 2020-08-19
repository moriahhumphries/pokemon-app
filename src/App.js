import React from 'react';
import {Component} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import PageButtons from "./components/PageButtons";

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            pokemons: [],
            pokemonInfo: [],
            offset: 0,
            load: 20,
            pokemonSearch: []
        }
        this.handleShowMoreClick = this.handleShowMoreClick.bind(this)
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    handleSearchChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    loadNext() {
        return this.state.offset + this.state.load;
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
        let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.load;
        this.setState({isLoading: true})
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
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
                                            pokemonInfo: temp
                                        })
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


        const {pokemonInfo} = this.state;
        const pokemonList = pokemonInfo.map((pokemon) => {
            return (<PokemonCard pokemon={pokemon} key={pokemon.id}/>);
        });

        return (
            <div>
                <Header />
                <SearchForm handleSearchChange={this.handleSearchChange}
                data={this.state}/>

                <div className="container center-align" style={{"margin": "auto"}}>
                    {pokemonList}
                <PageButtons handleShowMoreClick={this.handleShowMoreClick}
                data={this.state}/>
                </div>
            </div>
        )
    }
}

export default App;
