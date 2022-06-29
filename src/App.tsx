import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios';
import {Header} from './components/Header';
import {Drawer} from './components/Drawer';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Favorites} from './pages/Favorites';

export type cardObj = {
  id: number
  imgUrl: string
  title: string
  price: number
  favorites: boolean
}

function App() {
  //open card on aside after all price click
  const onClickCart = () => {
    setCartOpened(!cartOpened);
  }

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState<Array<cardObj>>([]);
  const [favorites, setFavorites] = useState<Array<cardObj>>([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  //first rendering product cart on first page load
  useEffect(() => {
    axios.get('https://629f04bc8b939d3dc28c9f9a.mockapi.io/items').then(res => {
      setItems(res.data)
    })
    axios.get('https://629f04bc8b939d3dc28c9f9a.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
    axios.get('https://629f04bc8b939d3dc28c9f9a.mockapi.io/favorites').then(res => {
      setFavorites(res.data)
    })
  }, [])

  // added sneakers to card after cross click
  const onAddToCart = (obj: cardObj) => {
    axios.post('https://629f04bc8b939d3dc28c9f9a.mockapi.io/cart', obj);
    // prev - it`s prevState your useState first argument
    setCartItems(prev => [obj, ...prev]);
  }

  // remove sneakers from card after cross click
  const onRemoveItem = (id: number) => {
    axios.delete(`https://629f04bc8b939d3dc28c9f9a.mockapi.io/cart/${id}`);
    // prev - it`s prevState your useState first argument
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  // added sneakers to favorites after heart click
  const onAddToFavorites = (obj: cardObj) => {
    axios.post('https://629f04bc8b939d3dc28c9f9a.mockapi.io/favorites', obj);
    // prev - it`s prevState your useState first argument
    setFavorites(prev => [obj, ...prev]);
  }

  // search input listener
  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  }

  // clear search input
  const onClearSearchInput = () => {
    setSearchValue('');
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClickCart={onClickCart} onRemoveItem={onRemoveItem}/>}
      <Header onClickCart={onClickCart}/>

      <Routes>
        <Route path="/home" element={
          <Home searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                onClearSearchInput={onClearSearchInput}
                items={items}
                onAddToFavorites={onAddToFavorites}
                onAddToCart={onAddToCart}
          />
        }></Route>
        <Route path="/favorites" element={
          <Favorites favorites={favorites}
                     onAddToFavorites={onAddToFavorites}
                     onAddToCart={onAddToCart}/>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
