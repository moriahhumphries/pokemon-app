import React from 'react';

const SearchForm = (props) => {

    return (

    <form>
        <input type="text"
               value={props.data.pokemonSearch}
               name="pokemonSearch"
               placeholder="Search Pokemon by Name"
               onChange={props.handleSearchChange}
        />
        <h1>You Searched: {props.data.pokemonSearch}</h1>
        <br/>
        <button style={{
            "display": "inline-block",
            "backgroundColor": "red",
            "fontWeight": "bold",
            "marginRight": "10px",
            "marginBottom" : "20px"
        }}
                type="button" className="btn">Show Favorites <i className="fas fa-heart"></i>
        </button>
    </form>
    )
}

export default SearchForm;