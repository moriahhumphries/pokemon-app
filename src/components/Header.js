import React from "react";
import './../App.css';

const Header = () => {
    return (
        <div className="center-align" id="top" style={{"margin": "20px 0"}}>
            <img src="../pokeball.png" alt="pokemon logo" className="pokeball"
                 style={{"width": "12vw", "marginRight": "10px"}}/>
            <img src="../pokemon-logo.png" alt="pokemon logo" className="header" style={{"width": "45vw"}}/>
            <h5 className="description" style={{"width": "90vw", "margin": "0 auto"}}>Explore the original 151 Pokemon
                and save your favorites!</h5>
        </div>
    )

}

export default Header;