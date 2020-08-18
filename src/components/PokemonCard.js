import React from "react";

const PokemonCard = () => {
    return (
        <div className="row text-center ml-1">
            <div className="col s12 m4 size">
                    <div className="card">
                        <div className="card-image">
                            <img src="../pokeball.png"
                            alt="pokemon"
                                />
                            <form>
                                <button
                                    className="button-style btn btn-floating halfway-fab waves-effect waves-light red">
                                    <i className="material-icons">favorite</i>
                                </button>
                            </form>

                        </div>
                        <div className="card-content">
                            <span className="card-title center-align">Pokemon Name</span>
                            <p>Name</p>
                            <p></p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default PokemonCard;