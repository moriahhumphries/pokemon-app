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
        {/*<h3 style={{"fontSize": "1.5em"}}>You Searched: {props.pokemonSearch}</h3>*/}
        <br/>

    </form>
    )
}

export default SearchForm;