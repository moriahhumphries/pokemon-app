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
                   "width" : "50vw"
               }}
        />
        <button style={{
            "display": "inline-block",
            "backgroundColor": "red",
            "fontWeight": "bold",
            "marginLeft": "10px",
        }}
                type="button" className="btn">Show Favorites <i className="fas fa-heart"></i>
        </button>
        <h5>You Searched: {props.data.pokemonSearch}</h5>
        <br/>

    </form>
    )
}

export default SearchForm;