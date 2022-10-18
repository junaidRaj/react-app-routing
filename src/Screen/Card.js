import React from 'react'
import { useLocation } from "react-router-dom";
function Card() {
  let location = useLocation();
  let item = location.state;

  return (
    <>
    <h1 style={{textAlign: "center", margin: "2rem 0"}}>Selected Item</h1>
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={item.image} className="card-img-top img-fluid w-100 h-100" />
        <h5 className="card_title text-center">{item.category}</h5>
        <p className="card_text text-center">{item.title}</p>
        <h5 className="card_title text-center">${item.price}</h5>
      </div>
    </>
  )
}
export default Card;