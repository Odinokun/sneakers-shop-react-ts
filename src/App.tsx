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
  const [cartOpened, setCartOpened] = useState(false); //open-close cart


  //first rendering product cart on first page load
  useEffect(() => {
    axios.get(`https://${process.env.REACT_APP_API_ENDPOINT}/items`).then(res => {
      setItems(res.data)
    })
    axios.get(`https://${process.env.REACT_APP_API_ENDPOINT}/cart`).then(res => {
      setCartItems(res.data)
    })
  }, [])

  // added sneakers to cart after cross click
  const onAddToCart = (obj: CardObj) => {
    // added sneakers to cart from backend
    axios.post(`https://${process.env.REACT_APP_API_ENDPOINT}/cart`, obj);
    // prev - it`s prevState, your useState first argument
    setCartItems(prev => [obj, ...prev]);
  }

  // remove sneakers from cart after delete click
  const onRemoveFromCart = (id: number) => {
    // remove sneakers from cart on backend
    axios.delete(`https://${process.env.REACT_APP_API_ENDPOINT}/cart/${id}`);
    // prev - it`s prevState, your useState first argument
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems}
                             onClickCart={onClickCart}
                             onRemoveFromCart={onRemoveFromCart}/>}
      <Header onClickCart={onClickCart}/>

      <div className="content">
        <Routes>
          <Route path="/home" element={
            <Home items={items} onAddToCart={onAddToCart}/>
          }></Route>
          <Route path="/favorites" element={
            <Favorites/>
          }></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
