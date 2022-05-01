import TasteCard from './components/TasteCard';
import { tastes } from './database';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <h1>Coffee Roast Levels</h1>
      <CardWrapper>
        {tastes.map(taste => (
          <TasteCard taste={taste} />
        ))}
      </CardWrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main`
  background-color: var(--color-light-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
