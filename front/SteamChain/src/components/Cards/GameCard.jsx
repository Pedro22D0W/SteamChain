import React from 'react';
import PriceField from './PriceField';
import './Style/GameCardStyle.css';

const GameCard = (props) => {
    return (
        <div className='game-card-style'>

            <img src={props.image} alt="" />

            <div>
                 <PriceField {...props} />
            </div>

        </div>
    );
}

export default GameCard;