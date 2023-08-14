import React from 'react';

const ProgressBar = ({energyLevel}) => {
    return (
        <div className="progress">
            <div className="bar" style={{width: `${energyLevel}%`}}>
                <p>ENERGY LEVEL</p>
            </div>
        </div>
    );
};

export default ProgressBar;