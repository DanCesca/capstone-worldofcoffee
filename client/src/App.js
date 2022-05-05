import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main`
  background-color: var(--color-light-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
`;


