import s from './header.module.scss'
import React from "react";
import {NavLink} from 'react-router-dom';

type PropsType = {
  onClickCart: () => void
}

export const Header = (props: PropsType) => {
  return (
    <header className={s.header}>
      <NavLink to='/home' className={s.headerLeft}>
        <img width={40} height={40} src='/img/logo.png' alt="React Sneakers"/>
        <div>
          <h3 className={s.headerInfoTitle}>React Sneakers</h3>
          <p className={s.headerInfoSlogan}>The best sneakers in the world</p>
        </div>
      </NavLink>

      <ul className={s.headerRight}>
        <li className={s.headerRightItem} onClick={props.onClickCart}>
          <img src="/img/cart.svg" alt="cart icon"/>
          <span>$ 1205</span>
        </li>
        <NavLink to="/favorites" className={s.headerRightItem}>
          <img src="/img/heart.svg" alt=""/>
        </NavLink>
        <li className={s.headerRightItem}>
          <img src="/img/user.svg" alt="user icon"/>
        </li>
      </ul>
    </header>
  )
}