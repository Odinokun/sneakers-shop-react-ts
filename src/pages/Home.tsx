import s from '../components/Card/card.module.scss';
import React, {useState} from 'react';
import {ContentHeader} from '../components/ContentHeader/ContentHeader';
import {Card, CardType} from '../components/Card/Card';
import {CardObj} from '../App';
import {Skeleton} from '../components/Sketeton/Skeleton';

type PropsType = {
  items: Array<CardType>
  cartItems: Array<CardObj>
  onAddToCart: (obj: CardObj) => void
  onAddToFavorites: (obj: CardObj) => void
  isLoading: boolean
}

export const Home = (props: PropsType) => {
  const [searchValue, setSearchValue] = useState(''); //input state

  // input search
  const onSearchInputChange = (value: string) => {
    setSearchValue(value)
  }

  const renderItems = () => {
    return (
      props.items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item: CardType) => (
            <Card key={item.id}
                  id={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  price={item.price}
                  onPlus={(obj: CardObj) => props.onAddToCart(obj)}
                  onFavorites={(obj: CardObj) => props.onAddToFavorites(obj)}
                  favorited={false}
                  added={props.cartItems.some(obj => +obj.id === +item.id)}
            />
          )
        )
    )
  }

  const skeletonArray = () => {
    const arr = [...Array(8)];

    return (
      arr.map((item, index: number) => (
        <div className={s.card} key={index}>
          <Skeleton />
        </div>))
    )
  }

  return (
    <>
      <ContentHeader
        onSearchInputChange={onSearchInputChange}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />

      <div className="cardWrapper">
        {props.isLoading ? skeletonArray() : renderItems()}
      </div>
    </>
  )
}