import React from 'react';

const SearchForm = (props) => {

    return (

    <form className="center-align">
        <input type="text"
               value={props.data.pokemonSearch}
               name="pokemonSearch"
               placeholder="Search Pokemon"
               onChange={props.handleSearchChange}
               style={{
                   "display": "inline-block",
                   "width" : "25vw",
                   "backgroundColor" : "white",
                   "color": "black",
                   "paddingLeft" : "10px"
               }}
        />
        <br />
        <button style={{
            "display": "inline-block",
            "backgroundColor": "red",
            "fontWeight": "bold",
            "marginTop": "10px"
        }}
                type="button" className="btn">Show Favorites <i className="fas fa-heart"></i>
        </button>
        <h3 style={{"fontSize": "1.5em"}}>You Searched: {props.data.pokemonSearch}</h3>
        <br/>

    </form>
    )
}

export default SearchForm;