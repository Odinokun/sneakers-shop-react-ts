import React, {ChangeEvent} from 'react';
import {Card, CardType} from '../components/Card/Card';
import {cardObj} from '../App';

type PropsType = {
  searchValue: string
  onChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => void
  onClearSearchInput: () => void
  items: Array<CardType>
  onAddToFavorites: (obj: cardObj) => void
  onAddToCart: (obj: cardObj) => void
}

export const Home = ({
                       searchValue,
                       onChangeSearchInput,
                       onClearSearchInput,
                       items,
                       onAddToFavorites,
                       onAddToCart
                     }: PropsType) => {
  return (
    <div className="content">
      <header className="contentHeader">
        <h1 className="contentTitle">{searchValue ? "Search about: " + searchValue : 'All Sneakers!'}</h1>
        <div className="search">
          <button className="searchButton">
            <img src="img/search.svg" alt="search icon"/>
          </button>
          <input onChange={onChangeSearchInput}
                 value={searchValue}
                 type="text"
                 placeholder="Search..."/>
          {searchValue &&
            <button onClick={onClearSearchInput}
                    className="searchCloseButton">
              <img src="img/btn-remove.svg" alt="clear icon"/>
            </button>}
        </div>
      </header>
      <div className="cardWrapper">
        {items
          .filter((item: CardType) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item: CardType) => (
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