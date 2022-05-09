import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import styled from 'styled-components';
import { tastes } from './database.js';

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home tastes={tastes} />} />
        <Route path="/product/:id" element={<Product tastes={tastes} />} />
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
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
