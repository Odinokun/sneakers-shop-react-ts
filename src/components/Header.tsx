import React from "react";
import {NavLink} from 'react-router-dom';

type PropsType = {
  onClickCart: () => void
}

export const Header = (props: PropsType) => {
  return (
    <header className='header'>
      <div className="headerLeft">
        <NavLink to="/home">
          <img width={40} height={40} src='/img/logo.png' alt="React Snikers"/>
        </NavLink>
        <div className="headerInfo">
          <h3 className="headerInfoTitle">React Sneakers</h3>
          <p className="headerInfoSlogan">The best sneakers in the world</p>
        </div>
      </div>

      <ul className="headerRight">
        <li className="basketBtn headerRightMenuItem" onClick={props.onClickCart}>
          <img src="/img/cart.svg" alt="cart"/>
          <span>$ 1205</span>
        </li>
        <NavLink to="/favorites" className="headerRightMenuItem">
          <img src="/img/favorite-heart.svg" alt="favorite"/>
        </NavLink>
        <li className="headerRightMenuItem">
          <img src="/img/user.svg" alt="user"/>
        </li>
      </ul>
    </header>
  )
}