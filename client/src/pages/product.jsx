import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Product({ tastes }) {
  const { id } = useParams();
  const taste = tastes.find(taste => taste.id === id);

  return (
    <>
      <Header hasBackButton="true" />
      <PageTitle>
        Your Coffee Journey
        <br />
        Starts Here
      </PageTitle>
      <ProductWrapper role="list">
        {taste ? (
          <ProductCard>
            <ProductPic src={taste.sample.image} alt={taste.sample.name} />
            <ProductName>{taste.sample.name}</ProductName>
            <ProductFlavors>{taste.sample.flavors}</ProductFlavors>
            <ProductPromise>Why You'll Love it</ProductPromise>
            <ProductDescription>{taste.sample.description}</ProductDescription>
            <ProductPrice>Price (250g): {taste.sample.price}</ProductPrice>
          </ProductCard>
        ) : (
          <p>Sorry, nothing found. Please select another coffee.</p>
        )}
      </ProductWrapper>
      <NavBar />
    </>
  );
}

export default Product;

const PageTitle = styled.h2`
  margin-top: 4rem;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const ProductWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
`;

const ProductCard = styled.li`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 1fr);
  padding: 0.8rem;
`;

const ProductPic = styled.img`
  object-fit: fill;
  max-width: 100%;
  max-height: 100%;
  grid-column: 1/2;
  grid-row: 1/3;
`;

const ProductName = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: end;
  padding: 0.8rem;
  font-weight: bold;
`;

const ProductFlavors = styled.p`
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: start;
`;

const ProductPromise = styled.p`
  grid-column: 1/3;
  grid-row: 3/4;
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-self: end;
`;

const ProductDescription = styled.p`
  grid-column: 1/3;
  grid-row: 4/6;
  align-self: start;
`;

const ProductPrice = styled.p`
  grid-column: 1/3;
  grid-row: 5/6;
  align-self: start;
  font-weight: bold;
  padding: 1rem;
`;
