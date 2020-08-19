import React from "react";

const PokemonCard = ({pokemon}) => {
    let newPokemon = pokemon.map(ele => {


        return (
            <div className="card col s12 m3 l3" style={{"margin":"50px"}}>
                <div className="card-image">
                <img src={ele.sprites.front_default} alt="pokemon"/>
            <form>
                <button className="btn btn-floating halfway-fab waves-effect waves-light red">
                    <i className="fas fa-heart"></i>
                </button>
            </form>
                </div>
                <div className="card-content">
                    <a href="#">
                            <span

                                className="card-title center-align"
                                style={{"fontSize": "1.75vw"}}>{ele.name}</span>
                    </a>
                    <span className="center align">Height: {ele.height}</span>
                    <br/>
                    <span className="center align">ID: {ele.id}</span>
                    <br/>
                    <span className="center align">Weight: {ele.weight}</span>
                    <br/>
                    <span className="center align">Weight: {ele.weight}</span>
                    <br/>
                    <br/>
                    <span className="center align"><a
                        href={`https://pokeapi.co/api/v2/pokemon/${ele.id}`}>Link</a></span>
                </div>
            </div>)
        }
    )
    return (
            <div className="row text-center" key={pokemon.id} style={{"background":"red"}}>
                {newPokemon}
                {/*<div className="col s12 m4 l12">*/}
                {/*    <div className="card col s12 m4 l4">*/}
                {/*        <div className="card-image">*/}
                {/*            /!*<img src={pokemon.sprites['front_default']} alt="pokemon"/>*!/*/}
                {/*            <hr/>*/}
                {/*            <form>*/}
                {/*                <button*/}
                {/*                    className="btn btn-floating halfway-fab waves-effect waves-light red">*/}
                {/*                    <i className="fas fa-heart"></i>*/}
                {/*                </button>*/}
                {/*            </form>*/}

                {/*        </div>*/}
                {/*        <div className="card-content">*/}
                {/*            <a href="#">*/}
                {/*            <span*/}

                {/*                className="card-title center-align"*/}
                {/*                  style={{"fontSize": "1.75vw"}}>{pokemon.name}</span>*/}
                {/*            </a>*/}
                {/*            <span className="center align">Height: {pokemon.height}</span>*/}
                {/*            <br/>*/}
                {/*            <span className="center align">ID: {pokemon.id}</span>*/}
                {/*            <br/>*/}
                {/*            <span className="center align">Weight: {pokemon.weight}</span>*/}
                {/*            <br/>*/}
                {/*            <span className="center align">Weight: {pokemon.weight}</span>*/}
                {/*            <br/>*/}
                {/*            <br/>*/}
                {/*            <span className="center align"><a*/}
                {/*                href={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}>Link</a></span>*/}
                {/*        </div>*/}
                {/*    </div>*/}


                {/*</div>*/}
            </div>
    )
}

export default PokemonCard;