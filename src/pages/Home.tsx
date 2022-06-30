import {ContentHeader} from '../components/ContentHeader/ContentHeader';
import {Card, CardType} from '../components/Card/Card';
import React, {useState} from 'react';
import {CardObj} from '../App';

type PropsType = {
  items: Array<CardType>
  onAddToCart: (obj: CardObj) => void
}

export const Home = (props: PropsType) => {
  const [searchValue, setSearchValue] = useState(''); //input state

  // input search
  const onSearchInputChange = (value: string) => {
    setSearchValue(value)
  }

  return (
    <>
      <ContentHeader
        onSearchInputChange={onSearchInputChange}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />

      <div className="cardWrapper">
        {props.items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item: CardType, index) => (
              <Card key={index}
                    id={item.id}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    price={item.price}
                    onPlus={(obj) => props.onAddToCart(obj)}
              />
            )
          )}
      </div>
    </>
  )
}