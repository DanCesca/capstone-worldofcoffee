import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SelectButton from '../components/SelectButton';

function Product({ tastes }) {
  const { id, sampleId } = useParams();
  const taste = tastes.find(taste => taste.id === id);
  const tasteSample = taste.sample.find(sample => sample.id === sampleId);

  return (
    <>
      <Header hasBackButton="true" />
      {taste && tasteSample ? (
        <>
          <PageTitle>
            Your Coffee Journey
            <br />
            Starts Here
          </PageTitle>
          <ProductWrapper role="list">
            <ProductCard>
              <ProductPic src={tasteSample.image} alt={tasteSample.name} />
              <ProductName>{tasteSample.name}</ProductName>
              <ProductFlavors>{tasteSample.flavors}</ProductFlavors>
              <ProductPromise>Why You'll Love it</ProductPromise>
              <ProductDescription>{tasteSample.description}</ProductDescription>
              <ProductPrice>Price (250g): {tasteSample.price}</ProductPrice>
            </ProductCard>
          </ProductWrapper>
        </>
      ) : (
        <>
          <ErrorImage src={require('../images/cups.jpg')} alt="empty cup" />
          <ErrorMessage>
            Sorry, nothing found. <br /> Please select another coffee.
          </ErrorMessage>
        </>
      )}
      <OtherPicks role="list">
        <OtherPicksTitle>Other Picks</OtherPicksTitle>
        {taste.sample.map(sample =>
          sample.id === sampleId ? (
            ''
          ) : (
            <OtherPicksContainer>
              <OtherPickImage src={sample.image} alt={sample.name} />
              <OtherPickInfo>
                {sample.name}: {sample.flavors}
              </OtherPickInfo>
              <StyledLink  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} to={`/product/${taste.id}/${sample.id}`}>
                <SelectButton>Select</SelectButton>
              </StyledLink>
            </OtherPicksContainer>
          )
        )}
      </OtherPicks>
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
  border: 2px solid red;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  padding: 0.8rem;
`;

const ProductPic = styled.img`
  object-fit: fill;
  max-width: 100%;
  max-height: 100%;
  grid-column: 1/2;
  grid-row: 1/3;
  border: 2px solid red;
`;

const ProductName = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: end;
  padding: 0.8rem;
  font-weight: bold;
  border: 2px solid red;
`;

const ProductFlavors = styled.p`
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: start;
  border: 2px solid red;
`;

const ProductPromise = styled.p`
  grid-column: 1/3;
  grid-row: 3/4;
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-self: end;
  border: 2px solid red;
`;

const ProductDescription = styled.p`
  grid-column: 1/3;
  grid-row: 4/6;
  align-self: start;
  border: 2px solid red;
`;

const ProductPrice = styled.p`
  grid-column: 1/3;
  grid-row: 5/6;
  align-self: start;
  font-weight: bold;
  padding: 1rem;
  border: 2px solid red;
`;

const ErrorImage = styled.img`
  width: 50%;
  border: 1px solid #084d2c;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  padding: 1rem;
`;

const OtherPicks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3rem;
`;

const OtherPicksTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const OtherPicksContainer = styled.li`
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  max-width: 35ch;
  margin: 1rem;
  padding: 1rem;
`;

const OtherPickImage = styled.img`
  width: 75%;
`;

const OtherPickInfo = styled.p`
  font-size: 0.85em;
  font-weight: bold;
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: inherit;
  text-decoration: none;
  display: block;
`;
