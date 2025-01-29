import React from "react";
import "./FlipCard.css";

const FlipCard = ({ src, alt, title, description }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                {/* Передняя сторона */}
                <div className="flip-card-front">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                {/* Задняя сторона */}
                <div className="flip-card-back">
                    <img src={src} alt={alt} className="flip-card-image" />
                    <button className="flip-card-button">Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
