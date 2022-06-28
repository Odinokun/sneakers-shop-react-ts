import React, {useState} from "react";
import s from "./card.module.scss";
import {log} from 'util';
import {cardObj} from '../../App';

export type CardType = {
  id: number
  imgUrl: string
  title: string
  price: number
  onAddToFavorites: ({id, imgUrl, title, price}: cardObj) => void
  onPlus: ({id, imgUrl, title, price}: cardObj) => void
}

export const Card = ({id, imgUrl, title, price, onAddToFavorites, onPlus}: CardType) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // added sneakers to card after cross click
  // and change button color
  const onClickPlus = () => {
    onPlus({id, imgUrl, title, price});
    setIsAdded(!isAdded);
  }

  // added sneakers to favorite after heart click
  // and change button color
  const onClickFavorite = () => {
    onAddToFavorites({id, imgUrl, title, price})
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={s.card}>
      <button onClick={onClickFavorite} className={s.favorite}>
        <img src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt="favorite"/>
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