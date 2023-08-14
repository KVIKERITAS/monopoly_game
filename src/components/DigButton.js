import React from 'react';

const DigButton = ({digGold}) => {
    return (
        <button className="digBtn" onClick={digGold}>DIG</button>
    );
};

export default DigButton;