import { render, screen } from '@testing-library/react';
import TasteCard from './components/TasteCard';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App', () => {
  it('renders three cards with an image, a title and a profile description', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const name1 = screen.getByText(/Light Roast/i);
    const image1 = screen.getByAltText(/Light Roast/i);
    const profile1 = screen.getByText(
      /You will like this, if you enjoy fruity flavours and a striking acidity./i
    );

    const name2 = screen.getByText(/Medium Roast/i);
    const image2 = screen.getByAltText(/Medium Roast/i);
    const profile2 = screen.getByText(
      /This is for you, if you like the taste of nuts and milk chocolate./i
    );

    const name3 = screen.getByText(/Dark Roast/i);
    const image3 = screen.getByAltText(/Dark Roast/i);
    const profile3 = screen.getByText(
      /If you like that roasty, strong and sweet taste of coffee, go for this./i
    );

    expect(name1).toBeInTheDocument();
    expect(image1).toBeInTheDocument();
    expect(profile1).toBeInTheDocument();

    expect(name2).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
    expect(profile2).toBeInTheDocument();

    expect(name3).toBeInTheDocument();
    expect(image3).toBeInTheDocument();
    expect(profile3).toBeInTheDocument();
  });
});
