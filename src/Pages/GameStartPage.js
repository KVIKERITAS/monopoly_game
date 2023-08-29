import React, {useState} from 'react';
import Piece from "../components/Piece";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import logo from "../assets/logoKVIKERITAS.png"


const pieces = [
    {
        name: "Hat",
        image: "https://static.thenounproject.com/png/331514-200.png"
    },
    {
        name: "Car",
        image: "https://static.thenounproject.com/png/4869-200.png"
    },
    {
        name: "Shoe",
        image: "https://static.thenounproject.com/png/331516-200.png"
    },
    {
        name: "Iron",
        image: "https://static.thenounproject.com/png/331515-200.png"
    }
]

const GameStartPage = () => {

    const [error, setError] = useState("")

    const playerPiece = useSelector(state => state.player.playerPiece)
    const nav = useNavigate()

    function startGame() {
        playerPiece ? nav("/gameboard") : setError("Please select your game piece")
    }

    return (
        <div className="gameStartPage">
            <img src={logo} alt=""/>
            <h1>MONOPOLY</h1>
            <div className="choicesContainer">
                {pieces.map((piece, index) =>
                    <Piece
                    key={index}
                    piece={piece}
                    />)}
            </div>

            <button className="startGameBtn" onClick={startGame}>START GAME</button>
            {error && <p className="errorMessage">{error}</p>}


        </div>
    );
};

export default GameStartPage;