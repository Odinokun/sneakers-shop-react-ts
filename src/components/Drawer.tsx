import React from "react";

type PropsType = {
  onClickCart: () => void
}

export const Drawer = (props: PropsType) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawerHeader">
          <h2 className="drawerTitle">Cart</h2>
          <button className="cartItemButton" onClick={props.onClickCart}>
            <img src="/img/btn-remove.svg" alt="close"/>
          </button>
        </div>

        <div className="items">
          <div className="cartItem">
            <img className="cartItemImage" src="img/sneakers/1.jpg" alt="sneakers"/>
            <div className="cartItemInfo">

              <h5 className="cartItemTitle">Men Sneakers Nike Blazer Mid Suede</h5>
              <div className="cartItemPrice"><b>$ 127</b></div>
            </div>
            <button className="cartItemButton">
              <img src="/img/btn-remove.svg" alt="remove"/>
            </button>
          </div>
          <div className="cartItem">
            <img className="cartItemImage" src="img/sneakers/5.jpg" alt="sneakers"/>
            <div className="cartItemInfo">

              <h5 className="cartItemTitle">Men Sneakers Nike Blazer Mid Suede</h5>
              <div className="cartItemPrice"><b>$ 1237</b></div>
            </div>
            <button className="cartItemButton">
              <img src="/img/btn-remove.svg" alt="remove"/>
            </button>
          </div>
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
    </div>
  )
}