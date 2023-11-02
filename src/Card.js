import React from 'react';
import "./card.css";

function Card(){
    return(
        <><div className="card">
            <h1>Card 1</h1>
            <p>This is a card</p>
        </div><div className="card">
                <h1>Card 2</h1>
                <p>This is a card</p>
            </div><div className="card">
                <h1>Card 3</h1>
                <p>This is a card</p>
            </div></>
    );
}

export default Card;