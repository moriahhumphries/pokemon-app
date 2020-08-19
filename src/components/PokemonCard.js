import React from "react";

const PokemonCard = ({pokemon}) => {
    return (
        <div className="row text-center" style={{"display": "inline-block", "margin" : "0"}} key={pokemon.id}>
            <div className="col 12" style={{"width" : "15vw"}}>
                    <div className="card">
                        <div className="card-image">
                            <img src={pokemon.sprites['front_default']} />
                            <hr />
                            <form>
                                <button
                                    className="btn btn-floating halfway-fab waves-effect waves-light red">
                                    <i className="fas fa-heart"></i>
                                </button>
                            </form>

                        </div>
                        <div className="card-content">
                            <span className="card-title center-align" style={{"fontSize": "1.75vw"}}>{pokemon.name}</span>
                            <span className="center align">Height: {pokemon.height}</span>
                            <br />
                            <span className="center align">ID: {pokemon.id}</span>
                            <br />
                            <span className="center align">Weight: {pokemon.weight}</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default PokemonCard;