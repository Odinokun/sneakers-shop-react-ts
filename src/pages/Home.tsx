import {ContentHeader} from '../components/ContentHeader/ContentHeader';
import {Card, CardType} from '../components/Card/Card';
import React, {useState} from 'react';
import {CardObj} from '../App';
import {log} from 'util';

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
    const filteredItems = props.items && props.items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (props.isLoading ? [...Array(10)] : filteredItems
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
                  loading={props.isLoading}
            />
          )
        )
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
        {renderItems()}
      </div>
    </>
  )
}