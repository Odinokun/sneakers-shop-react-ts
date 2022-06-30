import React, {useState} from "react";
import s from "./card.module.scss";
import {log} from 'util';
import {CardObj} from '../../App';

export type CardType = {
  id: number
  imgUrl: string
  title: string
  price: number
  onPlus: ({id, imgUrl, title, price}: CardObj) => void
}

export const Card = ({id, imgUrl, title, price, onPlus}: CardType) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // added sneakers to card after cross click
  // and change button color
  const onClickPlus = () => {
    onPlus({id, imgUrl, title, price});
    setIsAdded(!isAdded);
  }

  // added sneakers to favorites after cross click
  // and change button color
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={s.card}>
      <button onClick={onClickFavorite} className={s.favorite}>
        <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="unliked"/>
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