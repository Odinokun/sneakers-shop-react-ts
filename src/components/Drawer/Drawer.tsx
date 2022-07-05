import React from "react";

import {CardObj} from '../../App';
import {DrawerItems} from './DrawerItems/DrawerItems';
import {DrawerHeader} from './DrawerHeader/DrawerHeader';
import {DrawerFooter} from './DrawerFooter/DrawerFooter';
import {DrawerEmpty} from './DrawerEmpty/DrawerEmpty';

import s from './drawer.module.scss'

type PropsType = {
  onClickCart: () => void
  items: Array<CardObj>
  onRemoveFromCart: (id: number) => void
  opened: boolean
}

export const Drawer = (props: PropsType) => {
  return (
    <>
      <div className={`${s.overlay} ${props.opened ? s.isActive : ''}`} onClick={props.onClickCart}></div>
      <div className={`${s.drawer} ${props.opened ? s.isActive : ''}`}>

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