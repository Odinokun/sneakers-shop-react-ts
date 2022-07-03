import {FavoritesHeader} from '../components/FavoritesHeader/FavoritesHeader';
import {Card} from '../components/Card/Card';
import {CardObj} from '../App';
import React from 'react';

type PropsType = {
  favorites: Array<CardObj>
  onAddToCart: (obj: CardObj) => void
  onAddToFavorites: (obj: CardObj) => void
  isLoading: boolean
}

export const Favorites = (props: PropsType) => {
  return (
    <>
      <FavoritesHeader/>

      {/*<div className="cardWrapper">*/}
      {/*  {props.favorites.map((item: CardObj, index) => (*/}
      {/*      <Card key={index}*/}
      {/*            id={item.id}*/}
      {/*            imgUrl={item.imgUrl}*/}
      {/*            title={item.title}*/}
      {/*            price={item.price}*/}
      {/*            onPlus={(obj: CardObj) => props.onAddToCart(obj)}*/}
      {/*            onFavorites={(obj: CardObj) => props.onAddToFavorites(obj)}*/}
      {/*            favorited={false}*/}
      {/*            added={false}*/}
      {/*            loading={props.isLoading}*/}
      {/*      />*/}
      {/*    )*/}
      {/*  )}*/}
      {/*</div>*/}
    </>
  )
}