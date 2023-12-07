import React from 'react';
import PriceField from './PriceField';
import GameCardStyle from './Style/GameCardStyle.css';

const GameCard = (props) => {
    return (
        <div className='game-card-style'>

            <img src={props.poster} alt="" />

            <div>
                 <PriceField {...props} />
            </div>

        </div>
    );
}

export default GameCard;