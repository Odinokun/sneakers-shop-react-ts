import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios';
import {Card, CardType} from './components/Card/Card';
import {Header} from './components/Header';
import {Drawer} from './components/Drawer';

export type cardObj = {
  id: number
  imgUrl: string
  title: string
  price: number
}

function App() {
  //open card on aside after all price click
  const onClickCart = () => {
    setCartOpened(!cartOpened);
  }

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState<Array<cardObj>>([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  //first rendering product cart on first page load
  useEffect(() => {
    // fetch('https://629f04bc8b939d3dc28c9f9a.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json: any) => {
    //     setItems(json);
    //   })
    axios.get('https://629f04bc8b939d3dc28c9f9a.mockapi.io/items').then(res => {
      setItems(res.data)
    })
    axios.get('https://629f04bc8b939d3dc28c9f9a.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
  }, [])

  // added sneakers to card after cross click
  const onAddToCart = (obj: cardObj) => {
    // add items to cart array at mockapi
    axios.post('https://629f04bc8b939d3dc28c9f9a.mockapi.io/cart', obj);
    // prev - it`s prevState your useState first argument
    setCartItems(prev => [obj, ...prev]);
  }

  // remove sneakers from card after cross click
  const onRemoveItem = (id: number) => {
    // remove items from cart array at mockapi
    axios.delete(`https://629f04bc8b939d3dc28c9f9a.mockapi.io/cart/${id}`);
    // prev - it`s prevState your useState first argument
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  // serch input listener
  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  }

  // clear serch input
  const onClearSerchInput = () => {
    setSearchValue('');
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClickCart={onClickCart} onRemoveItem={onRemoveItem}/>}
      <Header onClickCart={onClickCart}/>

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
              <button onClick={onClearSerchInput}
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
                      onClickFavorite={() => console.log('favorite')}
                      onPlus={(obj) => onAddToCart(obj)}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
