import React from "react";

const PopupCard = ({pokemon}) => {
    return (
        <div className="row text-center" style={{"display": "inline-block", "margin": "0"}} key={pokemon.id}>
            <div className="col 12" style={{"width": "15vw"}}>
                <div className="card">
                    <div className="card-image">
                        <img src={pokemon.sprites['front_default']} alt="pokemon"/>
                        <hr/>
                        <form>
                            <button
                                className="btn btn-floating halfway-fab waves-effect waves-light red">
                                <i className="fas fa-heart"></i>
                            </button>
                        </form>

                    </div>
                    <div className="card-content">
                        <a href="#">
                            <span className="card-title center-align"
                                  style={{"fontSize": "1.75vw"}}>{pokemon.name}</span>
                        </a>
                        <span className="center align">Height: {pokemon.height}</span>
                        <br/>
                        <span className="center align">ID: {pokemon.id}</span>
                        <br/>
                        <span className="center align">Weight: {pokemon.weight}</span>
                        <br />
                        <span className="center align">Abilities: </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupCard;