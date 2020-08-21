import React from 'react';

const SearchForm = (props) => {
    return (

    <form className="center-align">
        <input type="text"
               value={props.pokemonSearch}
               name="pokemonSearch"
               placeholder="Search Pokemon"
               onChange={props.handleSearchChange}
               style={{
                   "display": "inline-block",
                   "width" : "50vw",
                   "backgroundColor" : "white",
                   "color": "black",
                   "paddingLeft" : "10px"
               }}
        />
        <br />
        <br/>

    </form>
    )
}

export default SearchForm;