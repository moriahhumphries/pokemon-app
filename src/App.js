import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PokemonList from "./components/PokemonList";
import AllPokemon from "./components/AllPokemon";
import Header from "./components/Header";
import RouterTest from "./components/RouterTest";
import SinglePokemon from "./components/SinglePokemon";

function App() {

    return (
        <div>
             <Router>
                 <nav>
                     <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/pokemon">All Pokemon</Link></li>
                         <li><Link to="/list">List</Link></li>
                         <li><Link to="/router-test">Test</Link></li>
                     </ul>
                 </nav>
                <Header />
                <div>
                    <Switch>
                        <Route path="/" exact component={AllPokemon}/>
                        <Route path="/pokemon" exact component={AllPokemon}/>
                        <Route path="/list/:ind" component={SinglePokemon}/>
                        <Route path="/list" exact component={PokemonList}/>
                        <Route path="/router-test" component={RouterTest}/>
                    </Switch>
                </div>
             </Router>
        </div>

    );
}

export default App;

