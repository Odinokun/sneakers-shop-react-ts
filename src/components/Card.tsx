import React from "react";

export const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="unliked"/>
      </div>
      <img className="cardImage" src="img/sneakers/1.jpg" alt="sneakers"/>
      <h5 className="cardTitle">Men Sneakers Nike Blazer Mid Suede</h5>
      <div className="cardInfo">
        <div className="cardPrice">
          <span>Price:</span>
          <b>$ 127</b>
        </div>
        <button className="button">
          <img src="/img/btn-plus.svg" alt="plus"/>
        </button>
      </div>
    </div>
  )
}