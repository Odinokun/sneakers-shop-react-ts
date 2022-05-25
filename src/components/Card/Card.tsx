import React from "react";
import s from "./card.module.scss";

type CardType = {
  id: string
  imgUrl: string
  title: string
  price: number
  onClickPlus: () => void
  onClickFavorite: () => void
}

export const Card = (props: CardType) => {

  return (
    <div className={s.card}>
      <button onClick={props.onClickFavorite} className={s.favorite}>
        <img src="/img/heart-unliked.svg" alt="unliked"/>
      </button>
      <img className={s.cardImage} src={props.imgUrl} alt="sneakers"/>
      <h5 className={s.cardTitle}>{props.title}</h5>
      <div className={s.cardInfo}>
        <div className={s.cardPrice}>
          <span>Price:</span>
          <b>$ {props.price}</b>
        </div>
        <button className={s.button} onClick={props.onClickPlus}>
          <img src="/img/btn-plus.svg" alt="plus"/>
        </button>
      </div>
    </div>
  )
}