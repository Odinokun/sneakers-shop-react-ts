import React, {useState} from "react";
import s from "./card.module.scss";
import ContentLoader from 'react-content-loader';
import {CardObj} from '../../App';

export type CardType = {
  id: number
  imgUrl: string
  title: string
  price: number
  onPlus: ({id, imgUrl, title, price}: CardObj) => void
  onFavorites: ({id, imgUrl, title, price}: CardObj) => void
  favorited: boolean
  added: boolean
  loading: boolean
}

export const Card = ({id, imgUrl, title, price, onPlus, onFavorites, favorited, added, loading}: CardType) => {
  const [isAdded, setIsAdded] = useState<boolean>(added);
  const [isFavorite, setIsFavorite] = useState<boolean>(favorited);

  // added sneakers to card after cross click
  // and change button color
  const onClickPlus = () => {
    onPlus({id, imgUrl, title, price});
    setIsAdded(!isAdded);
  }

  // added sneakers to favorites after cross click
  // and change button color
  const onClickFavorite = () => {
    onFavorites({id, imgUrl, title, price});
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={s.card}>
      {
        loading ? <ContentLoader
            speed={2}
            width={170}
            height={245}
            viewBox="0 0 170 245"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="170" height="150"/>
            <rect x="0" y="164" rx="5" ry="5" width="170" height="14"/>
            <rect x="0" y="185" rx="5" ry="5" width="130" height="14"/>
            <rect x="0" y="220" rx="5" ry="5" width="90" height="24"/>
            <rect x="140" y="212" rx="5" ry="5" width="32" height="32"/>
          </ContentLoader>
          :
          <>
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
          </>
      }
    </div>
  )
}