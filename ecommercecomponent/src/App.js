import React, { useEffect, useState } from 'react';
import './styles/main.css';
import MenuElement from './components/MenuElement';
import Cart from './components/Cart';
import dishes from './assets/data/data.json';

function App() {
  const [dish, setDish] = useState({"dishes": []})
  useEffect(() =>{
     setDish(dishes)
  },[])
  return (
    <>
      <div className="circle" id="first"></div>
      <div className="circle" id="second"></div>
      <div className="circle" id="third"></div>
      <div className="main__container">
          <div className="menu__container">
              <div className="menu__container--title">To Go Menu</div>
              {dish.dishes.map(element => (
                <MenuElement menu={element} key={element.id}/>
              ))}
          </div>
          <div className="cart__container">
              <div className="cart__container--title">Your Cart</div>
              <Cart/>
          </div>
      </div>
    </>
  );
}

export default App;
