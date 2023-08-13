import React from 'react';

const Upgrades = ({name, cost, img}) => {
    return (
        <div className="upgrade">
            <img src={img} alt=""/>
            <p>{cost}$</p>
        </div>
    );
};

export default Upgrades;