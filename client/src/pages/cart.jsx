import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import { useState } from 'react';



function Cart () {

return (
<>
<Header title="World of Coffee"/>
<CartTitle>Your Shopping Cart</CartTitle>
<CartListWrapper>
<CartItem></CartItem>
</CartListWrapper>
<NavBar />
</>

);

}

export default Cart;

const CartTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const CartListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const CartItem = styled.li`
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  max-width: 35ch;
  margin: 1rem;
  padding: 1rem;
`;