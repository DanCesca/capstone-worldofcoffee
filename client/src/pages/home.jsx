import TasteCard from '../components/TasteCard';
import { tastes } from '../database';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

function Home() {
  return (
    <>
      <Header />
      <PageTitle>Coffee Roast Levels</PageTitle>
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
  padding: 1rem;
`;
