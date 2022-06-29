import s from './drawer.module.scss'

import React from "react";
import {CardObj} from '../../App';
import {DrawerItems} from './DrawerItems/DrawerItems';
import {DrawerHeader} from './DrawerHeader/DrawerHeader';
import {DrawerFooter} from './DrawerFooter/DrawerFooter';
import {DrawerEmpty} from './DrawerEmpty/DrawerEmpty';

type PropsType = {
  onClickCart: () => void
  items: Array<CardObj>
  onRemoveFromCart: (id: number) => void
}

export const Drawer = (props: PropsType) => {
  return (
    <>
      <div className={s.overlay} onClick={props.onClickCart}></div>
      <div className={s.drawer}>

        <DrawerHeader onClickCart={props.onClickCart}/>
        {
          props.items.length > 0 ?
            <>
              <DrawerItems items={props.items} onRemoveFromCart={props.onRemoveFromCart}/>
              <DrawerFooter/>
            </>
            :
            <DrawerEmpty onClickCart={props.onClickCart}/>
        }
      </div>
    </>
  )
}