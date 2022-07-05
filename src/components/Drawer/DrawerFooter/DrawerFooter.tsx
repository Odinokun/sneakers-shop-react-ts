import React from 'react';
import s from './drawerFooter.module.scss';
import AppContext from '../../../context';
import {CardObj} from '../../../App';

type PropsType = {}

export const DrawerFooter = (props: PropsType) => {
  const {cartItems} = React.useContext<any>(AppContext);
  const totalPrice = cartItems.reduce((sum: number, obj: CardObj) => +obj.price + +sum, 0);

  return (
    <>
      <ul className={s.drawerFooter}>
        <li className={s.drawerFooterItem}>
          <span className={s.drawerFooterTitle}>Total:</span>
          <div className={s.drawerFooterDecor}></div>
          <div className={s.drawerFooterPrice}>$ {totalPrice}</div>
        </li>
        <li className={s.drawerFooterItem}>
          <span className={s.drawerFooterTitle}>Bonus 10%:</span>
          <div className={s.drawerFooterDecor}></div>
          <div className={s.drawerFooterPrice}>$ {totalPrice + (totalPrice / 10)}</div>
        </li>
      </ul>
      <button className={s.drawerFooterBtn}>
        <span>Buy all</span>
        <img src="/img/arrow-right.svg" alt="arrow right"/>
      </button>
    </>
  )
}