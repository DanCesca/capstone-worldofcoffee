import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Cart from './pages/cart';
import styled from 'styled-components';
import { tastes } from './database.js';
import { useState } from 'react';


function App() {
  
  const [cartItems, setCartItems] = useState([]);

  const onAdd = tasteSample => {
    const exist = cartItems.find(item => item.id === tasteSample.id);
    if (exist) {
      setCartItems(
        cartItems.map(item => (item.id === exist.id ? { ...exist, qty: exist.qty + 1 } : item))
      );
    } else {
      setCartItems([...cartItems, { ...tasteSample, qty: 1 }]);
    }
  };

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home tastes={tastes} />} />
        <Route path="/product/:id/:sampleId" element={<Product tastes={tastes} onAdd={onAdd}/>} />
        <Route path="/cart" element={<Cart tastes={tastes} cartItems={cartItems} onAdd={onAdd}/>} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main`
  background-color: var(--color-light-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
