import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RouterTest from "./components/RouterTest";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import AllPokemon from "./components/AllPokemon";
import Header from "./components/Header";

function App() {

    return (
        <div>
            <Navbar/>
            <Header />
            <Router>
                <div>
                    <Switch>
                        <Route path="/router-test" exact component={RouterTest}/>
                        <Route path="/" exact component={AllPokemon}/>
                        <Route path="/pokemon" component={AllPokemon}/>

                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

