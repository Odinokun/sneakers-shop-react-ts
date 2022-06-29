import s from './drawerItems.module.scss'
import React from 'react';
import {CardObj} from '../../../App';

type PropsType = {
  items: Array<CardObj>
}

export const DrawerItems = (props: PropsType) => {
  return (
    <div className={s.items}>
      {
        props.items.map((obj: CardObj) => (
          <div className={s.cartItem} key={obj.id}>
            <img className={s.cartItemImage}
                 src={obj.imgUrl} alt="sneakers"/>
            <div className={s.cartItemInfo}>

              <h5 className={s.cartItemTitle}>{obj.title}</h5>
              <div className={s.cartItemPrice}><b>$ {obj.price}</b></div>
            </div>
            <button className={s.cartItemButton}>
              <img src="/img/btn-remove.svg" alt="remove"/>
            </button>
          </div>
        ))
      }
    </div>
  )
}