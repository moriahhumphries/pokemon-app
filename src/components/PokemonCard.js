import React from "react";

const PokemonCard = ({pokemon}) => {
    return (
        <div className="row text-center" style={{"display": "inline-block", "margin" : "0"}} key={pokemon.id}>
            <div className="col s12" style={{"width" : "15vw"}}>
                    <div className="card">
                        <div className="card-image">
                            <img src={pokemon.sprites['front_default']} />
                            <form>
                                <button
                                    className="btn btn-floating halfway-fab waves-effect waves-light red">
                                    <i className="material-icons">favorite</i>
                                </button>
                            </form>

                        </div>
                        <div className="card-content">
                            <span className="card-title center-align">{pokemon.name}</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default PokemonCard;