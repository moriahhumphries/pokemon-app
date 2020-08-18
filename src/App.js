import React, {Component} from 'react';
import './App.css';
import PokemonCard from "./components/PokemonCard";

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            pokemon: [],

        }
        // Bind syntax
        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(response => response.json())
            .then(data => {
                    console.log(data.results[1])
                    this.setState({
                        loading: false,
                        pokemon: data.pokemon
                    });
                },
                (error) => {
                    this.setState({
                        loading: false,
                        error
                    });
                }
            )
    }


    render() {
        const text = this.state.loading ? "Loading..." : this.state.pokemon
        const data = this.state.pokemon
        return (
            <div>
                <PokemonCard />
                <p>{text}</p>
                <p>{data}</p>
            </div>
        )
    }
}

export default App
