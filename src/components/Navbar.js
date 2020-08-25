import React from "react";
import './../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/router-test">Router</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pokemon">All Pokemon</Link></li>
                </ul>
            </nav>
        </Router>
    )
}

export default Navbar;