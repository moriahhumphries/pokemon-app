import React from 'react';
import {Component} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            pokemons: [],
            pokemonInfo: [],
            offset: 0,
            load: 20
        }
        this.handleShowMoreClick = this.handleShowMoreClick.bind(this)
    }

    loadNext() {
        return this.state.offset + this.state.load;
    }
    handleShowMoreClick(event) {
        const nextPokemon = this.showNext();
        this.setState({offset: nextPokemon}, () => {
            this.showMore();
        })
    }

    componentDidMount () {
        this.showNextSet();
    }

    showNextSet () {
        let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.load;
        this.setState({isLoading: true})
        fetch(url)
            .then(response => response.json())
            .then(data => {
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


        const pokemonList = pokemonInfo.map((pokemon, index) => {
            return (<PokemonCard pokemon={pokemon} key={pokemon.id}/>);
        });


        if (this.state.pokemons.length > 0) {
            return (
                <div>
                    {pokemonList}
                    <button style={{"display":"block"}} type="button" className="btn" onClick={this.handleShowMore}>Show More</button>

                </div>
            );
        }
        return (
            <div>
            <h1>Loading....</h1>
            </div>
        )
    }
}

export default App;
