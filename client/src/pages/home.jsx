import TasteCard from '../components/TasteCard';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

function Home({ tastes, countCartItems }) {
  return (
    <>
      <Header title="World of Coffee" countCartItems={countCartItems} />
      <PageTitle>Our Coffee Roast Levels</PageTitle>
      <CardWrapper role="list">
        {tastes.map(taste => (
          <TasteCard key={taste.id} taste={taste} />
        ))}
      </CardWrapper>
      <NavBar />
    </>
  );
}

export default Home;

const CardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const PageTitle = styled.h2`
  margin-top: 1rem;
  padding: 1rem;
`;
