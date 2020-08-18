import React from 'react';
import {Component} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import Header from "./components/Header";

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
                <div className="container center-align" style={{"margin": "auto"}}>
                    {pokemonList}
                    <div>
                        <button style={{
                            "display": "inline-block",
                            "backgroundColor": "red",
                            "fontWeight": "bold",
                            "marginRight": "10px"
                        }}
                                type="button" className="btn" onClick={this.handleShowMoreClick}>Show More
                        </button>
                        <a href="#top">
                            <button style={{
                                "display": "inline-block",
                                "backgroundColor": "red",
                                "fontWeight": "bold",
                                "color": "white"
                            }} type="button" className="btn"> Return to top
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default App;
