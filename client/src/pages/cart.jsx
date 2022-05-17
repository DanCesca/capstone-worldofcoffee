import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

function Cart({ cartItems, onAdd, onRemove, onDelete }) {
  const itemsPrice = cartItems.reduce(
    (totalPrice, itemPrice) => totalPrice + itemPrice.price * itemPrice.qty,
    0
  );
  const shippingPrice = itemsPrice > 20 ? 0 : 2.99;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <>
      <Header hasBackButton="true" />
      <CartTitle>Your Shopping Cart</CartTitle>
      {cartItems.length === 0 && <div>Your Cart is Empty.</div>}
      {cartItems.map(item => (
        <CartListWrapper role="list">
          <CartItem key={item.id}>
            <CartItemPic src={item.image} alt={item.name} />
            <CartItemText>{item.name}</CartItemText>
            <CartItemCounter>
              <PlusButton onClick={() => onAdd(item)}>+</PlusButton>
              <MinusButton onClick={() => onRemove(item)}>-</MinusButton>
            </CartItemCounter>
            <DeleteButton onClick={() => onDelete(item)}>x</DeleteButton>
            <CartItemQuantityAndPrice>
              {item.qty} x {item.price.toFixed(2)} €
            </CartItemQuantityAndPrice>
          </CartItem>
          <CartItemSeparation />
        </CartListWrapper>
      ))}
      {cartItems.length !== 0 && (
        <>
          <TotalAmountBox>
            <CoffeePriceSection>
              <p>Coffee Price</p>
              <p>{itemsPrice.toFixed(2)} €</p>
            </CoffeePriceSection>
            <ShippingPriceSection>
              <p>Shipping Price</p>
              <p>{shippingPrice.toFixed(2)} €</p>
            </ShippingPriceSection>
            <TotalPriceSection>
              <p>Total Price</p>
              <p>{totalPrice.toFixed(2)} €</p>
            </TotalPriceSection>
          </TotalAmountBox>
        </>
      )}
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
  margin-bottom: 1rem;
`;

const CartItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  margin: 0.2rem;
  padding: 1rem;
`;

const CartItemPic = styled.img`
  object-fit: fill;
  max-width: 100%;
  max-height: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
  border: 1px solid #084d2c;
`;

const CartItemText = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: center;
  padding: 0.8rem;
  font-weight: bold;
  font-size: 0.85rem;
`;

const CartItemCounter = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: end;
`;

const CartItemQuantityAndPrice = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  align-self: end;
`;

const CartItemSeparation = styled.hr`
  border: 1px solid var(--color-green);
  border-radius: 5px;
`;

const PlusButton = styled.button`
  background-color: var(--color-light-gray);
  border: 1px solid var(--color-black);
  border-radius: 8px;
  color: var(--color-black);
  margin: 0.2rem;
  padding: 0.2rem;
`;

const MinusButton = styled.button`
  background-color: var(--color-light-gray);
  border: 1px solid var(--color-black);
  border-radius: 8px;
  color: var(--color-black);
  margin: 0.2rem;
  padding: 0.25rem;
`;

const DeleteButton = styled.button`
  color: var(--color-black);
  margin: 0.2rem;
  padding: 0.25rem;
  position: absolute;
  width: fit-content;
  right: 1.2rem;
`;

const TotalAmountBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 1rem;
  padding: 1rem;
  width: 100%;
`;

const CoffeePriceSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
`;

const ShippingPriceSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
`;

const TotalPriceSection = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  justify-content: space-between;
  margin: 0.5rem;
`;
