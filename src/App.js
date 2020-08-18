import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
        // Bind syntax
        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }


    render() {
        const text = this.state.loading ? "Loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App
