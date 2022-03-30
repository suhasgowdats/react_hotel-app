import React from "react";
import './Banner.css'
import { NavLink } from "react-router-dom";


export default function Banner({}){
    return(
        <>
        <div className="banner">
         <div className="black-label">
             <div className="black-items">
             <h3>Go Near</h3>
             <p style={{fontSize:10}}>plan a different kind of getaway to uncover hidden germs near you.</p>
             <NavLink to="/hotel-list"><button className="btn">Explore Nearby stays</button></NavLink>
             </div>
         </div>
         <div className="image">
             <img className="img" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1191,w_2121,x_0,y_223/f_auto,q_auto,w_1100/v1555272928/shape/mentalfloss/50569-istock-486178472.jpg" alt=""/>
         </div>
         </div>
        </>
    )
}