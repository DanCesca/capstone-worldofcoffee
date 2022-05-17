import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Cart from './pages/cart';
import Favourites from './pages/favourites';
import styled from 'styled-components';
import { tastes } from './database.js';
import { useEffect, useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem('cartItems')) || []
  );

  const [favouriteCoffees, setFavouriteCoffees] = useState(
    () => JSON.parse(localStorage.getItem('favouriteCoffees')) || []
  );

  const onAdd = tasteSample => {
    const existingItem = cartItems.find(item => item.id === tasteSample.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === existingItem.id ? { ...existingItem, qty: existingItem.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...tasteSample, qty: 1 }]);
    }
  };

  const onRemove = tasteSample => {
    const existingItem = cartItems.find(item => item.id === tasteSample.id);
    if (existingItem.qty > 1) {
      setCartItems(
        cartItems.map(item =>
          item.id === existingItem.id ? { ...existingItem, qty: existingItem.qty - 1 } : item
        )
      );
    }
  };

  const onDelete = tasteSample => {
    const existingItem = cartItems.find(item => item.id === tasteSample.id);
    if (existingItem) {
      setCartItems(cartItems.filter(item => item.id !== tasteSample.id));
    }
  };

  const countCartItems = cartItems.length;

  function toggleFavouriteCoffee(tasteSample) {
    if(favouriteCoffees.includes(tasteSample)) {
     const updateFavouriteCoffees = favouriteCoffees.filter((favouriteCoffee) => favouriteCoffee !== tasteSample)
     setFavouriteCoffees(
       updateFavouriteCoffees
     )
   } else {
     setFavouriteCoffees([...favouriteCoffees, tasteSample])
   }
 }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('favouriteCoffees', JSON.stringify(favouriteCoffees))
  }, [favouriteCoffees]);

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home tastes={tastes} countCartItems={countCartItems} />} />
        <Route
          path="/product/:id/:sampleId"
          element={<Product tastes={tastes} countCartItems={countCartItems} onAdd={onAdd} favouriteCoffees={favouriteCoffees} toggleFavouriteCoffee={toggleFavouriteCoffee}/>}
        />
        <Route
          path="/cart"
          element={
            <Cart
              tastes={tastes}
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              countCartItems={countCartItems}
            />
          }
        />
        <Route path="/favourites" element={<Favourites countCartItems={countCartItems} favouriteCoffees={favouriteCoffees} toggleFavouriteCoffee={toggleFavouriteCoffee}/>} />
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
