import React, {useEffect, useState} from 'react';
import {Header} from './components/Header/Header';
import {Drawer} from './components/Drawer/Drawer';
import {Home} from './pages/Home';
import {Favorites} from './pages/Favorites';
import {CardType} from './components/Card/Card';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import AppContext from './context';

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
  const [isLoading, setIsLoading] = useState(true); //loading state


  //first rendering product cart on first page load
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const cartResponse = await axios.get(`https://${process.env.REACT_APP_API_ENDPOINT}/cart`);
      const favoritesResponse = await axios.get(`https://${process.env.REACT_APP_API_ENDPOINT}/favorites`);
      const itemsResponse = await axios.get(`https://${process.env.REACT_APP_API_ENDPOINT}/items`);

      setIsLoading(false);

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData();
  }, [])

  // added sneakers to cart after cross click
  const onAddToCart = (obj: CardObj) => {
    try {
      if (cartItems.find(item => +item.id === +obj.id)) {
        axios.delete(`https://${process.env.REACT_APP_API_ENDPOINT}/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => +item.id !== +obj.id))
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

  const isItemAdded = (id: number) => {
    return cartItems.some(obj => +obj.id === +id);
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded}}>

      <div className="wrapper">
        {cartOpened && <Drawer items={cartItems}
                               onClickCart={onClickCart}
                               onRemoveFromCart={onRemoveFromCart}/>}
        <Header onClickCart={onClickCart}/>

        <div className="content">
          <Routes>
            <Route path="/" element={
              <Home items={items}
                    cartItems={cartItems}
                    onAddToCart={onAddToCart}
                    onAddToFavorites={onAddToFavorites}
                    isLoading={isLoading}
              />
            }></Route>
            <Route path="/favorites" element={
              <Favorites onAddToCart={onAddToCart}
                         onAddToFavorites={onAddToFavorites}
                         isLoading={isLoading}
              />
            }></Route>
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
