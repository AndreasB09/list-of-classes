import React from "react";

function Card({ title, desc, image }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{desc}</p>
            <img src={image} alt={title} />
        </div>
    );
}

export default Card;