import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';


function Favourites({countCartItems, favouriteCoffees}) {
  return (
    <>
      <Header title="World of Coffee" countCartItems={countCartItems} />
      <CartTitle>Your Favourites</CartTitle>
      {favouriteCoffees.length === 0 && <div>No Favourites in Your Wish List.</div>}
      {favouriteCoffees.map(favouriteCoffee => (
        <CartListWrapper role="list" key={favouriteCoffee.id}>
          <CartItem>
            <CartItemPic src={favouriteCoffee.image} alt={favouriteCoffee.name} />
            <CartItemText>{favouriteCoffee.name}</CartItemText>
          </CartItem>
          <CartItemSeparation />
        </CartListWrapper>
      ))}
      <NavBar />
    </>
  );
}

export default Favourites;

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

const CartItemSeparation = styled.hr`
  border: 1px solid var(--color-green);
  border-radius: 5px;
`;