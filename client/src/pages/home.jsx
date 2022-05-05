import TasteCard from '../components/TasteCard';
import { tastes } from '../database';
import styled from 'styled-components';


function Home(){
return (
    <>
    <h1>Coffee Roast Levels</h1>
    <CardWrapper role="list">
      {tastes.map(taste => (
        <TasteCard key={taste.id} taste={taste} />
      ))}
    </CardWrapper>
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