import React from 'react';

const BoughtCard = ({card}) => {
    return (
        <>
            {card.id !== 1 &&
                <div className="boughtCard" style={{background: card.color}}>
                    <div className="boughtCardContent">
                        <div>
                            <h4><span>{card.name} </span></h4>
                        </div>
                        <div>
                            <h4>{card.price}$</h4>
                        </div>
                    </div>
                    <div className="sellBtn">SELL</div>
                </div>
            }
    </>
    );
};

export default BoughtCard;