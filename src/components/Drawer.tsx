import React from "react";
import {cardObj} from '../App';

type PropsType = {
  items: Array<cardObj>
  onClickCart: () => void
  onRemoveItem: (id: number) => void
}

export const Drawer = ({items, onClickCart, onRemoveItem}: PropsType) => {
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

        {
          items.length > 0 ?
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
                    <button className="cartItemButton" onClick={() => onRemoveItem(obj.id)}>
                      <img src="/img/btn-remove.svg" alt="remove"/>
                    </button>
                  </div>
                ))
              }
            </div>
            :
            <div className="emptyBox">
              <div className="emptyImage">
                <img src="/img/empty-box.jpeg" alt="empty image"/>
              </div>
              <p>Your box is empty</p>
              <button className="emptyButton" onClick={onClickCart}>
                <img src="/img/arrow-right.svg" alt="arrow right"/>
                <span>Take your choose</span>
              </button>
            </div>
        }


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