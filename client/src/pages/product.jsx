import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Product({ tastes }) {
  const { id } = useParams();
  const taste = tastes.find(taste => taste.id === id);

  return (
    <>
      <Header />
      <ProductWrapper role="list">
        <PageTitle>{taste.sample.name}</PageTitle>
      </ProductWrapper>
      <NavBar />
    </>
  );
}

export default Product;

const PageTitle = styled.h2`
  padding: 1rem;
`;

const ProductWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
