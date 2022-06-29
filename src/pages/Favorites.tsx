import {Card} from '../components/Card/Card';
import React from 'react';
import {cardObj} from '../App';

type PropsType = {
  favorites: Array<cardObj>
  onAddToFavorites: (obj: cardObj) => void
  onAddToCart: (obj: cardObj) => void
}

export const Favorites = ({favorites, onAddToFavorites, onAddToCart}: PropsType) => {
  return (
    <div className="content">
      <header className="contentHeader">
        <h1 className="contentTitle">My Favorite Sneakers!</h1>
      </header>
      <div className="cardWrapper">
        {favorites.map((item: cardObj) => (
            <Card key={item.id}
                  id={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  price={item.price}
                  favorites={item.favorites}
                  onAddToFavorites={(obj) => onAddToFavorites(obj)}
                  onPlus={(obj) => onAddToCart(obj)}
            />
          )
        )}
      </div>
    </div>
  )
}