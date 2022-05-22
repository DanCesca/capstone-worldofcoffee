import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Favourites({
  countCartItems,
  favouriteCoffees,
  addFavouritetoCart,
  deleteFavouriteCoffee,
}) {
  const notify = () =>
    toast.success('Your Item was added to the Shopping Cart', {
      position: toast.POSITION.TOP_CENTER,
      transition: Slide,
    });

  return (
    <>
      <Header title="World of Coffee" countCartItems={countCartItems} />
      <CartTitle>Your Favourites</CartTitle>
      {favouriteCoffees.length === 0 && <div>No Favourites in Your Wish List.</div>}
      {favouriteCoffees.map(favouriteCoffee => (
        <CartListWrapper role="list" key={favouriteCoffee.id}>
          <CartItem>
            <CartItemPic src={favouriteCoffee.image} alt={favouriteCoffee.name} />
            <CartItemText>{favouriteCoffee.name} </CartItemText>
            <CartItemFlavors>{favouriteCoffee.flavors}</CartItemFlavors>
            <CartItemPrice>{favouriteCoffee.price.toFixed(2)} €</CartItemPrice>
            <DeleteButton onClick={() => deleteFavouriteCoffee(favouriteCoffee)}>x</DeleteButton>
          </CartItem>
          <ButtonWrapper>
            <SelectButton
              onClick={() => {
                addFavouritetoCart(favouriteCoffee);
                notify();
              }}
            >
              Add to Cart
            </SelectButton>
          </ButtonWrapper>
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
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: 1.5fr;
  margin: 0.2rem;
  padding: 1rem;
  column-gap: 1rem;
  position: relative;
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
  align-self: start;
  padding: 0.2rem;
  font-weight: bold;
  font-size: 0.85rem;
`;

const CartItemFlavors = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: center;
  font-size: 0.85rem;
`;

const CartItemPrice = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: end;
  font-size: 0.85rem;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SelectButton = styled.button`
  padding: 0.6rem;
  margin-top: 0.3rem;
  border-radius: 0.5rem;
  background-color: var(--color-red);
  border: none;
  color: white;
  font-style: italic;
  font-weight: 500;
  cursor: pointer;
`;

const CartItemSeparation = styled.hr`
  border: 1px solid var(--color-green);
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  color: var(--color-black);
  margin: 0.2rem;
  padding: 0.25rem;
  position: absolute;
  width: fit-content;
  right: 1.2rem;
  cursor: pointer;
`;
