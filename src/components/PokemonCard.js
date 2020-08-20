import React from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root')
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function PokemonCard({ pokemon }) {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [pokeModal, setPokeModal] = React.useState(null)

    function openModal(pokeModalFromLoop) {
        setPokeModal(pokeModalFromLoop)
        console.log(pokeModalFromLoop)
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    let newPokemon = pokemon.map((ele, ind) => {
        return (
            <div className="card col s12 m3 l3" style={{ "margin": "50px" }} key={ind}>
                <div className="card-image">
                    <img src={ele.sprites.front_default} alt="pokemon" />
                    <form>
                        <button className="btn red">
                            <i className="fas fa-heart"></i>
                        </button>
                    </form>
                </div>

                <button onClick={() => openModal(ele)}>View Pokemon</button>
                <div className="card-content">
                    <a href="#">
                        <span

                            className="card-title center-align"
                            style={{ "fontSize": "1.75vw" }}>{ele.name}</span>
                    </a>
                    <span className="center align">Height: {ele.height}</span>
                    <br />
                    <span className="center align">ID: {ind + 1}</span>
                    <br />
                    <span className="center align">Weight: {ele.weight}</span>
                    <br />
                    <span className="center align">Weight: {ele.weight}</span>
                    <br />
                    <br />
                    <span className="center align"><a
                        href={`https://pokeapi.co/api/v2/pokemon/${ele.id}`}>Link</a></span>
                </div>
            </div>)
    }
    )
    return (
        <div className="row text-center" key={pokemon.id}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="card-content">
                    <img src={pokeModal ? pokeModal.sprites.front_default : ''} alt="pokemon" />
                    <a href="#"><span className="card-title center-align" style={{ "fontSize": "1.75vw" }}>{pokeModal ? pokeModal.name : ''}</span>
                    </a>
                </div>
                <button onClick={closeModal}>Close</button>
            </Modal>

            {newPokemon}

        </div>
    )
}

export default PokemonCard;