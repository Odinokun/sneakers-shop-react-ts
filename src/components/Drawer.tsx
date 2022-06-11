import React from "react";
import {cardObj} from '../App';

type PropsType = {
  onClickCart: () => void
  items: Array<cardObj>
}

export const Drawer = ({onClickCart, items}: PropsType) => {
  return (
    <>
      <div className="overlay" onClick={onClickCart}></div>
      <div className="drawer">
        <div className="drawerHeader">
          <h2 className="drawerTitle">Cart</h2>
          <button
            className="cartItemButton"
            onClick={onClickCart}
          >
            <img src="/img/btn-remove.svg" alt="close"/>
          </button>
        </div>

        <div className="items">
          {
            items.map((obj: cardObj) => (
              <div className="cartItem" key={obj.id}>
                <img className="cartItemImage"
                     src={obj.imgUrl} alt="sneakers"/>
                <div className="cartItemInfo">

                  <h5 className="cartItemTitle">{obj.title}</h5>
                  <div className="cartItemPrice"><b>$ {obj.price}</b></div>
                </div>
                <button className="cartItemButton">
                  <img src="/img/btn-remove.svg" alt="remove"/>
                </button>
              </div>
            ))
          }
        </div>

        <ul className="drawerFooter">
          <li className="drawerFooterItem">
            <span className="drawerFooterTitle">Total:</span>
            <div className="drawerFooterDecor"></div>
            <div className="drawerFooterPrice">$ 3541</div>
          </li>
          <li className="drawerFooterItem">
            <span className="drawerFooterTitle">Bonus 10%:</span>
            <div className="drawerFooterDecor"></div>
            <div className="drawerFooterPrice">$ 35</div>
          </li>
        </ul>
        <button className="drawerFooterBtn">
          <span>Buy all</span>
          <img src="/img/arrow-right.svg" alt="arrow right"/>
        </button>
      </div>
    </>
  )
}