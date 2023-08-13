import './App.css';
import React, {useState} from "react";
import Upgrades from "./components/Upgrades";
import InventoryItems from "./components/InventoryItems";
import GoldPrice from "./components/GoldPrice";
import ProgressBar from "./components/ProgressBar";
import DigButton from "./components/DigButton";

function App() {

    const [upgrades, setUpgrades] = useState([
        {
            name: "increaseChance",
            cost: 50,
            img: "https://66.media.tumblr.com/tumblr_mahd2lV27V1rfjowdo1_500.gif"
        },
        {
            name: "restoreEnergy",
            cost: 50,
            img: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/827a29a7b1121f9.png"
        },
        {
            name: "expandInventory",
            cost: 100,
            img: "https://art.pixilart.com/a16d2c3e6e3881f.png"
        }
    ])


    return (
        <div className="wrapper">
            <div className="upgradesContainer">

                {upgrades.map((upgrade, index) =>
                    <Upgrades
                    name={upgrade.name}
                    cost={upgrade.cost}
                    img={upgrade.img}
                />
                )}

            </div>

            <div className="container">
                <div className="inventoryContainer">
                    <div className="inventory">
                        <InventoryItems/>
                    </div>

                    <button className="sellGoldBtn">SELL</button>
                </div>

                <div className="goldContainer">
                    <GoldPrice/>
                    
                    <div className="moneyContainer">
                        <img src="https://cdn4.iconfinder.com/data/icons/random-8-bit-pixel/512/cash-512.png" alt=""/>
                        <p>100$</p>
                    </div>

                    <ProgressBar/>
                    <DigButton/>
                </div>
            </div>
        </div>
    )
}

export default App;