import React from 'react';
import s from './drawerHeader.module.scss';

type PropsType = {
  onClickCart: () => void
}

export const DrawerHeader = (props: PropsType) => {
  return (
    <div className={s.drawerHeader}>
      <h2 className={s.drawerTitle}>Cart</h2>
      <button
        className={s.drawerHeaderBtn}
        onClick={props.onClickCart}
      >
        <img src="/img/btn-remove.svg" alt="close"/>
      </button>
    </div>
  )
}