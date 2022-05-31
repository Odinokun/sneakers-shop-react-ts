import React from 'react';
import {Card} from './components/Card/Card';
import {Header} from './components/Header';
import {Drawer} from './components/Drawer';
import {v1} from 'uuid';

const arr = [
  {id: v1(), imgUrl: '/img/sneakers/1.jpg',  title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999},
  {id: v1(), imgUrl: '/img/sneakers/2.jpg',  title: 'Мужские Кроссовки Nike Air Max 270', price: 12999},
  {id: v1(), imgUrl: '/img/sneakers/3.jpg',  title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499},
  {id: v1(), imgUrl: '/img/sneakers/4.jpg',  title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999},
  {id: v1(), imgUrl: '/img/sneakers/5.jpg',  title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199},
  {id: v1(), imgUrl: '/img/sneakers/6.jpg',  title: 'Мужские Кроссовки Nike Kyrie 7', price: 11299},
  {id: v1(), imgUrl: '/img/sneakers/7.jpg',  title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799},
  {id: v1(), imgUrl: '/img/sneakers/8.jpg',  title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499},
  {id: v1(), imgUrl: '/img/sneakers/9.jpg',  title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999},
  {id: v1(), imgUrl: '/img/sneakers/10.jpg', title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 11299},
]

function App() {
  return (
    <div className="wrapper">
      <div style={{display: 'none'}} className="overlay">
        <Drawer/>
      </div>

      <Header/>

      <div className="content">
        <header className="contentHeader">
          <h1 className="contentTitle">All sneakers</h1>
          <div className="search">
            <button>
              <img src="img/search.svg" alt="search icon"/>
            </button>
            <input type="text" placeholder="Search..."/>
          </div>
        </header>
        <div className="cardWrapper">
          {arr.map((item) => (
              <Card key={item.id}
                    id={item.id}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    price={item.price}
                    onClickFavorite={()=>console.log('Add to favorite')}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
