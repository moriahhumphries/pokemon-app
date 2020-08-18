import React, {Component} from 'react';
import './App.css';
import PokemonCard from "./components/PokemonCard";

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            pokemonCharacters: [],
            pokemonDetails: [],
            offset: 0,
            load: 1048
        }
        // Bind syntax
        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.load;
        this.setState({loading: true})
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    this.setState({pokemonCharacters: data.results}, () => {
                        this.state.pokemonCharacters.map(pokemon => {
                            fetch(pokemon.url)
                                .then(response => response.json())
                                .then(data => {
                                    if (data) {
                                        let temp = this.state.pokemonDetails
                                        temp.push(data)
                                        this.setState({pokemonDetails: temp})
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

        const {pokemonDetails} = this.state;

        const pokemonList = pokemonDetails.map((pokemon, index) => {
            return (<PokemonCard pokemon={pokemon}/>);
        });
        return (
            <div>
                {pokemonList}
                <PokemonCard />
            </div>
        )
    }
}

export default App
