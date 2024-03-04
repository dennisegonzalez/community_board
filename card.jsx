import React from "react";

const Card = (props) => {
    return (
        <div className="game-card">
            <h5>{props.workout}</h5>
            <img src = {props.src}/>
            <div>
                <button>See muscles</button>
            </div>
        </div>
    )   
}

export default Card;