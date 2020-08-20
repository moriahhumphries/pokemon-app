import React, {useState, useEffect} from "react";
import Modal from 'react-modal'

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
        border: "5px solid black",
        zIndex: '1000'
    }
};

function PokemonCard({pokemon}) {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [pokeModal, setPokeModal] = useState(null)
    let [listOfFavorites, setListOfFavorites] = useState([])
    let openModal = (pokeModalFromLoop) => {
        setPokeModal(pokeModalFromLoop)
        console.log(pokeModalFromLoop)
        setIsOpen(true);
    }

    let closeModal = () => {
        setIsOpen(false);
    }
    useEffect(() => {
        const savedPokemon = JSON.parse(localStorage.getItem('favoritePokemon'))
        if (savedPokemon) setListOfFavorites(savedPokemon)
    }, [])
    useEffect(() => {
        localStorage.setItem('favoritePokemon', JSON.stringify(listOfFavorites))
    }, [listOfFavorites])
    let saveFavoritePokemon = (favPokemon) => {
        setListOfFavorites([favPokemon.name, ...listOfFavorites])
    }
    let newPokemon = pokemon.map((ele, ind) => {
            return (
                <div className="card col s12 m3 l2" style={{"margin": "5px", "padding": "0"}} key={ind}>
                    <div className="card-image">
                        <img src={ele.sprites.front_default} alt="pokemon"/>

                        <button className="btn-floating halfway-fab waves-effect waves-light red" style={{"zIndex": "0"}}
                                onClick={() => saveFavoritePokemon(ele)}>
                            <i className="fas fa-heart"/>
                        </button>
                        <hr/>
                    </div>

                    <div className="card-content center-align" style={{"padding": "5px"}}>
                        <span
                            className="card-title center-align"
                            style={{"fontSize": "1.5em"}}>{ele.name}</span>

                        <span className="center align">ID: {ind + 1}</span>
                        <br/>
                        <button className="btn" style={{"backgroundColor": "red", "fontWeight": "bold"}}
                                onClick={() => openModal(ele)}>View Details
                        </button>
                        {/*<span className="center align"><a*/}
                        {/*    href={`https://pokeapi.co/api/v2/pokemon/${ele.id}`}>Link</a></span>*/}
                    </div>
                </div>)
        }
    )
    return (
        <div className="row align-center" key={pokemon.id}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="card-content center-align">
                    <img style={{"width": "100%"}} src={pokeModal ? pokeModal.sprites.front_default : ''} alt="pokemon"/>
                    <br/>
                    <span className="card-title center-align"
                                      style={{"fontSize": "1.5em"}}>{pokeModal ? pokeModal.name : ''}</span>
                    <div>
                        <button className="btn-floating waves-effect waves-light red"
                                onClick={() => saveFavoritePokemon(pokeModal)}>
                            <i className="fas fa-heart"/>

                        </button>
                    </div>
                    <hr/>
                    <br/>
                    <span className="center align">Height: {pokeModal ? pokeModal.height : ""}</span>
                    <hr/>
                    <span className="center align">Weight: {pokeModal ? pokeModal.weight : ""}</span>
                    <hr/>
                    <br/>
                    <button className="btn" style={{"backgroundColor": "red", "fontWeight": "bold", "color": "white"}} onClick={closeModal}>Close</button>
                </div>
            </Modal>

            {newPokemon}

        </div>
    )
}

export default PokemonCard;