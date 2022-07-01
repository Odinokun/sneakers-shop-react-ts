import React, {useEffect, useState} from 'react';
import {Header} from './components/Header/Header';
import {Drawer} from './components/Drawer/Drawer';
import {Home} from './pages/Home';
import {Favorites} from './pages/Favorites';
import {CardType} from './components/Card/Card';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';

export type CardObj = {
  id: number
  imgUrl: string
  title: string
  price: number
}

function App() {
  //open cart on aside after all price click
  const onClickCart = () => {
    setCartOpened(!cartOpened);
  }

  const [items, setItems] = useState<Array<CardType>>([]); //main cards arr
  const [cartItems, setCartItems] = useState<Array<CardObj>>([]); //cards in cart
  const [favorites, setFavorites] = useState<Array<CardObj>>([]); //cards in favorites
  const [cartOpened, setCartOpened] = useState(false); //open-close cart


  //first rendering product cart on first page load
  useEffect(() => {
    axios.get(`https://${process.env.REACT_APP_API_ENDPOINT}/items`).then(res => {
      setItems(res.data)
    })
    axios.get(`https://${process.env.REACT_APP_API_ENDPOINT}/cart`).then(res => {
      setCartItems(res.data)
    })
    axios.get(`https://${process.env.REACT_APP_API_ENDPOINT}/favorites`).then(res => {
      setFavorites(res.data)
    })
  }, [])

  // added sneakers to cart after cross click
  const onAddToCart = (obj: CardObj) => {
    try {
      if (cartItems.find(item => item.id === obj.id)) {
        setCartItems(prev => prev.filter(item => item.id !== obj.id))
        axios.delete(`https://${process.env.REACT_APP_API_ENDPOINT}/cart/${obj.id}`);
      } else {
        axios.post(`https://${process.env.REACT_APP_API_ENDPOINT}/cart`, obj);
        // prev - it`s prevState, your useState first argument
        setCartItems(prev => [obj, ...prev]);
      }
    } catch (error) {
      alert('Do not added to cart');
    }
  }

  // remove sneakers from cart after delete click
  const onRemoveFromCart = (id: number) => {
    axios.delete(`https://${process.env.REACT_APP_API_ENDPOINT}/cart/${id}`);
    // prev - it`s prevState, your useState first argument
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  // added sneakers to favorites after heart click
  const onAddToFavorites = async (obj: CardObj) => {
    try {
      if (favorites.find(item => item.id === obj.id)) {
        axios.delete(`https://${process.env.REACT_APP_API_ENDPOINT}/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => item.id !== obj.id));
      } else {
        const {data} = await axios.post(`https://${process.env.REACT_APP_API_ENDPOINT}/favorites`, obj);
        // prev - it`s prevState, your useState first argument
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Do not added to favorites');
    }
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems}
                             onClickCart={onClickCart}
                             onRemoveFromCart={onRemoveFromCart}/>}
      <Header onClickCart={onClickCart}/>

      <div className="content">
        <Routes>
          <Route path="/" element={
            <Home items={items}
                  onAddToCart={onAddToCart}
                  onAddToFavorites={onAddToFavorites}
            />
          }></Route>
          <Route path="/favorites" element={
            <Favorites favorites={favorites}
                       onAddToCart={onAddToCart}
                       onAddToFavorites={onAddToFavorites}/>
          }></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
