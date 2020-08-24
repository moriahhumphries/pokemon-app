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
                    <Link to="/router-test">
                        <li>Router</li>
                    </Link>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/pokemon">
                        <li>All Pokemon</li>
                    </Link>
                </ul>
            </nav>
        </Router>
    )
}

export default Navbar;