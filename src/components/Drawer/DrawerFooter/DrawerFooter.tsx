import React from 'react';
import s from './drawerFooter.module.scss';

type PropsType = {}

export const DrawerFooter = (props: PropsType) => {
  return (
    <>
      <ul className={s.drawerFooter}>
        <li className={s.drawerFooterItem}>
          <span className={s.drawerFooterTitle}>Total:</span>
          <div className={s.drawerFooterDecor}></div>
          <div className={s.drawerFooterPrice}>$ 3541</div>
        </li>
        <li className={s.drawerFooterItem}>
          <span className={s.drawerFooterTitle}>Bonus 10%:</span>
          <div className={s.drawerFooterDecor}></div>
          <div className={s.drawerFooterPrice}>$ 35</div>
        </li>
      </ul>
      <button className={s.drawerFooterBtn}>
        <span>Buy all</span>
        <img src="/img/arrow-right.svg" alt="arrow right"/>
      </button>
    </>
  )
}