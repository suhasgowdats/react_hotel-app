import React from "react"
import './Card.css'


function Card({src, title, discriptiom, price}){
    return(
        <div className="card" >
        <img src={src} alt=""/>
        <div className="card-info">
            <h2>{title}</h2>
            <h4>{discriptiom}</h4>
            <h2>{price}</h2>
        </div>

        </div>
    )
}

export default Card