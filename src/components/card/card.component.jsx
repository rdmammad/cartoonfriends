import React from "react";
import "./card.style.css";

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.cartoon.id}?set=set4&size=180x220`} alt={`cartoon${props.cartoon.id}`}/>
        <h2> {props.cartoon.name} </h2>
        <p> {props.cartoon.email} </p>
    </div>
);