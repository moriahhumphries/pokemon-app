import React from "react";

const Header = () => {
    return (
        <div className="center-align"  id="top" style={{"margin" : "20px"}}>
            <img src="../pokeball.png" alt="pokemon logo" style={{"width" : "12vw"}} />
            <img src="../pokemon-logo.png" alt="pokemon logo" style={{"width" : "45vw"}} />
            <h5 style={{"width": "90vw", "margin": "0 auto"}}>View the original 151 Pokemon, save your favorites, and explore to view over 1000 total!</h5>
        </div>
    )

}

export default Header;