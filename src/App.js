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
    const [energyLevel, setEnergyLevel] = useState(100)
    const [inventoryItems, setInventoryItems] = useState([])
    const [inventorySpace, setInventorySpace] = useState(3)
    const [money, setMoney] = useState(100)
    const [goldPrice, setGoldPrice] = useState(13)
    const [chance, setChance] = useState(1)

    function digGold() {
        const randomEnergy = Math.floor((Math.random() * 10) + 1)

        if (inventoryItems.length < inventorySpace && energyLevel >= randomEnergy) {
            setEnergyLevel(energyLevel - randomEnergy)
            setInventoryItems([...inventoryItems, Number((Math.random() * chance).toFixed(2))])
        }
    }

    function sellGold() {
        setMoney(money + (inventoryItems.reduce((a, b) => a + b, 0) * goldPrice))
        setInventoryItems([])
        setGoldPrice(Math.floor((Math.random() * 20) + 11))
    }

    function buyUpgrade(upgradeName, upgradeCost) {
        if (money < upgradeCost) return
        setMoney(money - upgradeCost)

        switch(upgradeName) {
            case "increaseChance":
                setChance(chance + 0.3)
                const updatedUpgrades = upgrades
                const upgradeIndex = updatedUpgrades.findIndex(upgrade => upgrade.name === "increaseChance")
                updatedUpgrades[upgradeIndex].cost += 50
                setUpgrades(updatedUpgrades)
                break
            case "restoreEnergy":
                setEnergyLevel(energyLevel >= 80 ? 100 : energyLevel + 20)
                break
            case "expandInventory":
                setInventorySpace(inventorySpace+1)
                break;
            default:
        }
    }

    return (
        <div className="wrapper">
            <div className="upgradesContainer">

                {upgrades.map((upgrade, index) =>
                    <Upgrades
                        key={index}
                        name={upgrade.name}
                        cost={upgrade.cost}
                        img={upgrade.img}
                        buyUpgrade={buyUpgrade}
                    />
                )}

            </div>

            <div className="container">
                <div className="inventoryContainer">
                    <div className="inventory">
                        {inventoryItems.map((item, index) =>
                            <InventoryItems
                                key={index}
                                item={item}
                            />)}
                    </div>

                    <button className="sellGoldBtn" onClick={sellGold}>SELL</button>
                </div>

                <div className="goldContainer">
                    <GoldPrice
                    price={goldPrice}
                    />

                    <div className="moneyContainer">
                        <img src="https://cdn4.iconfinder.com/data/icons/random-8-bit-pixel/512/cash-512.png" alt=""/>
                        <p>{money.toFixed(2)}$</p>
                    </div>

                    <ProgressBar
                        energyLevel={energyLevel}
                    />

                    <DigButton
                        digGold={digGold}
                    />
                </div>
            </div>
        </div>
    )
}

export default App;