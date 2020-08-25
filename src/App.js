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
             <Router>
                {/*<Navbar/>*/}
                 <nav>
                     <ul>
                         <li><Link to="/router-test">Router</Link></li>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/pokemon">All Pokemon</Link></li>
                     </ul>
                 </nav>
                <Header />
                <div>
                    <Switch>
                        <Route path="/" exact component={AllPokemon}/>
                        <Route path="/router-test" exact component={RouterTest}/>
                        <Route path="/pokemon" component={AllPokemon}/>
                        <Route path="/pokemon/:id" component={PokemonDetail}/>
                    </Switch>
                </div>
             </Router>
        </div>

    );
}

export default App;

