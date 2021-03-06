import React, {useState, useEffect} from "react";
import Modal from 'react-modal'
import './../App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


Modal.setAppElement('#root')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        // width: "30vw",
        border: "5px solid #facc02",
        zIndex: '1000'
    }
};

function PokemonCard(props) {
    // Initializing state
    const [modalIsOpen, setIsOpen] = useState(false)
    const [pokeModal, setPokeModal] = useState(null)
    let [listOfFavorites, setListOfFavorites] = useState([])

    // Open Modal
    let openModal = (pokeModalFromLoop) => {
        setPokeModal(pokeModalFromLoop)
        setIsOpen(true);
    }
    // Close Modal
    let closeModal = () => {
        setIsOpen(false);
    }

    // Grabs favorites data from localstorage, saves information
    useEffect(() => {
        const savedPokemon = JSON.parse(localStorage.getItem('favoritePokemon'))
        if (savedPokemon) setListOfFavorites(savedPokemon)
    }, [])

    // Called when list of favorites is updated, adds to existing list of favorites
    useEffect(() => {
        localStorage.setItem('favoritePokemon', JSON.stringify(listOfFavorites))
    }, [listOfFavorites])
    let saveFavoritePokemon = (favPokemon) => {
        setListOfFavorites([favPokemon.name, ...listOfFavorites])
    }

    // Returns new array of pokemon cards
    let newPokemon = props.pokemonInfo.map((ele, ind) => {
            return (
                <div className="card col s11 m2 l2 pokemon-card"
                     style={{"margin": "16px", "padding": "0", "border": " 5px solid #facc02"}} key={ind}>
                    <div className="card-image">
                        <img src={ele.sprites.front_default} alt="pokemon"/>

                        <button className="button btn-floating halfway-fab waves-effect waves-light red"
                                style={{"zIndex": "0"}}
                                onClick={() => saveFavoritePokemon(ele)}>
                            <i className="fas fa-heart"/>
                        </button>
                        <hr/>
                    </div>


                    <div className="card-content center-align" style={{"padding": "5px 0"}}>
                        <span
                            className="card-title center-align"
                            style={{
                                "fontSize": "1.25em",
                                "marginTop": "10px"
                            }}>{ele.name.charAt(0).toUpperCase() + ele.name.substring(1)}</span>

                        <span style={{"display": "none"}} className="center align">ID: {ind + 1}</span>
                        <br/>
                        <button className="btn button"
                                style={{"backgroundColor": "red", "fontWeight": "bold", "margin": "5px 0"}}
                                onClick={() => openModal(ele)}>Quick View
                        </button>
                        <Router>
                            <Link to={`/list/${ind + 1}`} style={{"color": "white"}}>
                                <button className="btn button"
                                        style={{"backgroundColor": "red", "fontWeight": "bold", "margin": "5px 0"}}>New Page
                                </button>
                            </Link>
                        </Router>

                    </div>
                </div>

            )
        }
    )
    return (
        <div className="row align-center">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="card-content center-align">
                    <img style={{"width": "50%", "display": "inline-block"}}
                         src={pokeModal ? pokeModal.sprites.front_default : ''}
                         alt="pokemon"/>
                    <img style={{"width": "50%", "display": "inline-block"}}
                         src={pokeModal ? pokeModal.sprites.back_default : ''}
                         alt="pokemon"/>
                    <br/>

                    <div>
                        <button className="btn-floating waves-effect waves-light red"
                                onClick={() => saveFavoritePokemon(pokeModal)}>
                            <i className="fas fa-heart"/>

                        </button>
                    </div>
                    <hr/>
                    <span className="center align">Height: {pokeModal ? pokeModal.height : ""}</span>
                    <hr/>
                    <span className="center align">Weight: {pokeModal ? pokeModal.weight : ""}</span>
                    <hr/>
                    Abilities: {pokeModal ? pokeModal.abilities.map((ele, ind) => <span key={ind}>{ele.ability.name}
                    <br/></span>) : ''}
                    <hr/>
                    <span
                        className="center align">Type: {pokeModal ? pokeModal.types[0].type.name : ""}</span>
                    <br/>
                    <button className="btn" style={{
                        "backgroundColor": "red",
                        "fontWeight": "bold",
                        "color": "white",
                        "marginTop": "10px"
                    }}
                            onClick={closeModal}>Close
                    </button>
                </div>
            </Modal>

            {newPokemon}

        </div>
    )
}

export default PokemonCard;