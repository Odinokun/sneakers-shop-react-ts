import React from "react";

export const Header = () => {
  return (
    <header className='header'>
      <div className="headerLeft">
        <img width={40} height={40} src='/img/logo.png' alt="React Snikers"/>
        <div className="headerInfo">
          <h3 className="headerInfoTitle">React Sneakers</h3>
          <p className="headerInfoSlogan">The best sneakers in the world</p>
        </div>
      </div>

      <ul className="headerRight">
        <li>
          <img src="/img/cart.svg" alt="cart icon"/>
          <span>$ 1205</span>
        </li>
        <li>
          <img src="/img/user.svg" alt="user icon"/>
        </li>
      </ul>
    </header>
  )
}