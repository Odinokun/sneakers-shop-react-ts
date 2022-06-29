import React, {useState} from "react";
import s from "./card.module.scss";
import {log} from 'util';
import {cardObj} from '../../App';

export type CardType = {
  id: number
  imgUrl: string
  title: string
  price: number
  onClickFavorite: () => void
  onPlus: ({id, imgUrl, title, price}: cardObj) => void
}

export const Card = ({id, imgUrl, title, price, onClickFavorite, onPlus}: CardType) => {
  const [isAdded, setIsAdded] = useState(false);

  // added sneakers to card after cross click
  // and change button color
  const onClickPlus = () => {
    onPlus({id, imgUrl, title, price});
    setIsAdded(!isAdded);
  }

  return (
    <div className={s.card}>
      <button onClick={onClickFavorite} className={s.favorite}>
        <img src="/img/heart-unliked.svg" alt="unliked"/>
      </button>
      <img className={s.cardImage} src={imgUrl} alt="sneakers"/>
      <h5 className={s.cardTitle}>{title}</h5>
      <div className={s.cardInfo}>
        <div className={s.cardPrice}>
          <span>Price:</span>
          <b>$ {price}</b>
        </div>
        <button
          className={s.button}
          onClick={onClickPlus}>
          <img src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="plus"/>
        </button>
      </div>
    </div>
  )
}