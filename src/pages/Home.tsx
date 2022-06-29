import {ContentHeader} from '../components/ContentHeader/ContentHeader';
import {Card, CardType} from '../components/Card/Card';
import React from 'react';
import {CardObj} from '../App';

type PropsType = {
  items: Array<CardType>
  onAddToCart: (obj: CardObj) => void
}

export const Home = (props: PropsType) => {
  return (
    <>
      <ContentHeader/>

      <div className="cardWrapper">
        {props.items.map((item: CardType) => (
            <Card key={item.id}
                  id={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  price={item.price}
                  onClickFavorite={() => console.log('favorite')}
                  onPlus={(obj) => props.onAddToCart(obj)}
            />
          )
        )}
      </div>
    </>
  )
}