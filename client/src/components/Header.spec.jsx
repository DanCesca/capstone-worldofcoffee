import { render, screen } from '@testing-library/react';
import Header from './Header';
import {BrowserRouter as Router} from 'react-router-dom';
import { ReactComponent as BackButton } from '../icons/back.svg';

const title = 'World of Coffee';

describe('Header', () => {
    it('renders a title', () => {
      render(<Router><Header title={title} /></Router>);
  
      const headerTitle = screen.getByRole('heading', { name: /World of Coffee/i });
      expect(headerTitle).toBeInTheDocument();
    });
  });
