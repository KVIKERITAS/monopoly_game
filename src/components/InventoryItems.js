import React from 'react';

const InventoryItems = ({item}) => {
    return (
        <div className="inventoryItem">
            <img src="https://static.vecteezy.com/system/resources/previews/019/527/049/original/an-8-bit-retro-styled-pixel-art-illustration-of-gold-free-png.png" alt=""/>
            <p>{item}g</p>
        </div>
    );
};

export default InventoryItems;