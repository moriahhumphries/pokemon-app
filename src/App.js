import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import AllPokemon from "./components/AllPokemon";
import Header from "./components/Header";
import RouterTest from "./components/RouterTest";

function App() {

    return (
        <div>
             <Router>
                {/*<Navbar/>*/}
                 <nav>
                     <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/pokemon">All Pokemon</Link></li>
                         <li><Link to="/single">Single</Link></li>
                         <li><Link to="/router-test">Test</Link></li>
                     </ul>
                 </nav>
                <Header />
                <div>
                    <Switch>
                        <Route path="/" exact component={AllPokemon}/>
                        <Route path="/pokemon" exact component={AllPokemon}/>
                        <Route path="/single" component={PokemonDetail}/>
                        <Route path="/router-test" component={RouterTest}/>

                    </Switch>
                </div>
             </Router>
        </div>

    );
}

export default App;

