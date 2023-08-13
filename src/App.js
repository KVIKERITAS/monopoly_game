import './App.css';
import React from "react";

function App() {


    return (
        <div className="wrapper">
            <div className="upgradesContainer">

                <div className="upgrade">
                    <img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/827a29a7b1121f9.png" alt=""/>
                    <p>90</p>
                </div>

            </div>

            <div className="container">
                <div className="inventoryContainer">
                    <div className="inventory">
                        <div className="inventoryItem">
                            <img src="https://static.vecteezy.com/system/resources/previews/019/527/049/original/an-8-bit-retro-styled-pixel-art-illustration-of-gold-free-png.png" alt=""/>
                            <p>90</p>
                        </div>
                    </div>

                    <button className="sellGoldBtn">SELL</button>
                </div>

                <div className="goldContainer">
                   <div className="goldPrice">
                       <img src="https://pbs.twimg.com/media/FOIwslRWQAgmQ82.png" alt=""/>
                       <p>Gold price per g: <span>13$</span></p>
                   </div>
                    
                    <div className="moneyContainer">
                        <img src="https://cdn4.iconfinder.com/data/icons/random-8-bit-pixel/512/cash-512.png" alt=""/>
                        <p>100$</p>
                    </div>

                    <div className="progress">
                        <div className="bar">
                            <p>ENERGY LEVEL</p>
                        </div>
                    </div>

                    <button className="digBtn">DIG</button>
                </div>
            </div>
        </div>
    )
}

export default App;