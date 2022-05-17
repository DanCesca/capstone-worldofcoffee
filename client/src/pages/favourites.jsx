import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

function Favourites({countCartItems}) {
  return (
    <>
      <Header title="World of Coffee" countCartItems={countCartItems} />
      <CartTitle>Your Favourites</CartTitle>
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
