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
  }, [])

  // added sneakers to card after cross click
  const onAddToCart = (obj: CardObj) => {
    // prev - it`s prevState, your useState first argument
    setCartItems(prev => [obj, ...prev]);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClickCart={onClickCart}/>}
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
