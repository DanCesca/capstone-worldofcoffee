import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

function Cart({ cartItems, onAdd }) {
  return (
    <>
      <Header hasBackButton="true" />
      <CartTitle>Your Shopping Cart</CartTitle>
      {cartItems.length === 0 && <div>Your Cart is Empty.</div>}
      {cartItems.map(item => (
        <CartListWrapper role="list">
          <CartItem key={item.id}>
            {item.name} <button onClick={() => onAdd(item)}>+</button>
          </CartItem>
        </CartListWrapper>
      ))}

      <NavBar />
    </>
  );
}

export default Cart;

const CartTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const CartListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const CartItem = styled.li`
  max-width: 35ch;
  margin: 1rem;
  padding: 1rem;
`;
