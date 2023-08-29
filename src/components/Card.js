import React from 'react';

const Card = ({card}) => {
    return (
        <div className="card" id={`card${card.id}`} style={{gridArea: `card${card.id}`}}>
            <div className="cardContent" style={{background: card.color}}>
                <img src="https://static.thenounproject.com/png/331514-200.png" alt=""/>
                <h1>{card.name}</h1>
            </div>

            {card.id !== 1 &&
                <div className="buyBtn">
                {card.price}$
            </div>}

        </div>
    );
};

export default Card;