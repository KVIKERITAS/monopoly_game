import React from 'react';

const Upgrades = ({name, cost, img, buyUpgrade}) => {
    return (
        <div className="upgrade" onClick={() => buyUpgrade(name, cost)}>
            <img src={img} alt=""/>
            <p>{cost}$</p>
        </div>
    );
};

export default Upgrades;