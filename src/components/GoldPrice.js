import React from 'react';

const GoldPrice = ({price}) => {
    return (
        <div className="goldPrice">
            <img src="https://pbs.twimg.com/media/FOIwslRWQAgmQ82.png" alt=""/>
            <p>Gold price per g: <span>{price}$</span></p>
        </div>
    );
};

export default GoldPrice;