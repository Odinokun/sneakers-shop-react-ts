import s from '../components/Card/card.module.scss';
import React from 'react';
import {FavoritesHeader} from '../components/FavoritesHeader/FavoritesHeader';
import {Card} from '../components/Card/Card';
import {CardObj} from '../App';
import {Skeleton} from '../components/Sketeton/Skeleton';
import AppContext from '../context';

type PropsType = {
  onAddToCart: (obj: CardObj) => void
  onAddToFavorites: (obj: CardObj) => void
  isLoading: boolean
}

export const Favorites = (props: PropsType) => {
  const {favorites} = React.useContext<any>(AppContext);

  const renderItems = () => {
    return (
      favorites.map((item: CardObj, index: number) => (
          <Card key={index}
                id={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                price={item.price}
                onPlus={(obj: CardObj) => props.onAddToCart(obj)}
                onFavorites={(obj: CardObj) => props.onAddToFavorites(obj)}
                favorited={false}
                added={false}
          />
        )
      )
    )
  }

  const skeletonArray = () => {
    const arr = [...Array(12)];

    return (
      arr.map((item, index: number) => (
        <div className={s.card} key={index}>
          <Skeleton/>
        </div>))
    )
  }
  return (
    <>
      <FavoritesHeader/>

      <div className="cardWrapper">
        {props.isLoading ? skeletonArray() : renderItems()}
      </div>
    </>
  )
}