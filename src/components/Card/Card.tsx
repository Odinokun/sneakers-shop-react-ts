import React, {useState} from "react";
import s from "./card.module.scss";

export type CardType = {
  id: number
  imgUrl: string
  title: string
  price: number
  onClickFavorite: () => void
}

export const Card = (props: CardType) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }

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
        <button className={s.button} onClick={onClickPlus}>
          <img src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="plus"/>
        </button>
      </div>
    </div>
  )
}