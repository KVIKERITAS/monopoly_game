import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import GameStartPage from "./Pages/GameStartPage";
import GameBoardPage from "./Pages/GameBoardPage";

function App() {

    const dispatch = useDispatch()


    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<GameStartPage/>}
                    />

                    <Route
                        path="/gameboard"
                        element={<GameBoardPage/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;