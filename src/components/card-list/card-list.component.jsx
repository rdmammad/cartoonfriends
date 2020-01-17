import React from "react";
import {Card} from  "../card/card.component";
import "./card-list.style.css";

export const CardList = (props) => (
    <div className='card-list'>
        {
            props.cartoons.map((cartoon) =>
                <Card key={cartoon.id} cartoon={cartoon}/>)
        }
    </div>
);