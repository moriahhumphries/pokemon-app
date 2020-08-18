import React, {Component} from 'react';
import './App.css';
import PokemonCard from "./components/PokemonCard";

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            pokemon: [],
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
                if (data)
                    console.log(data)
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
