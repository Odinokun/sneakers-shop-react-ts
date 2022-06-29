import s from './drawer.module.scss'

import React from "react";
import {CardObj} from '../../App';
import {DrawerItems} from './DrawerItems/DrawerItems';
import {DrawerHeader} from './DrawerHeader/DrawerHeader';
import {DrawerFooter} from './DrawerFooter/DrawerFooter';

type PropsType = {
  onClickCart: () => void
  items: Array<CardObj>
}

export const Drawer = (props: PropsType) => {
  return (
    <>
      <div className={s.overlay} onClick={props.onClickCart}></div>
      <div className={s.drawer}>

        <DrawerHeader onClickCart={props.onClickCart}/>
        <DrawerItems items={props.items}/>
        <DrawerFooter/>

      </div>
    </>
  )
}