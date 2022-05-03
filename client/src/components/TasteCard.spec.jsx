import { render, screen } from '@testing-library/react';
import TasteCard from './TasteCard';

const taste = {
  id: '1',
  name: 'Light Roast',
  image: 'light-roast.jpg',
  teaser: 'You will like this, if you enjoy fruity flavours and a striking acidity.',
};

describe('TasteCard', () => {
  it('renders an article with an image, a title and a teaser', () => {
    render(<TasteCard taste={taste}></TasteCard>);
    const name = screen.getByText(/Light Roast/i);
    const image = screen.getByAltText(/Light Roast/i);
    const teaser = screen.getByText(
      /You will like this, if you enjoy fruity flavours and a striking acidity./i
    );

    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(teaser).toBeInTheDocument();
  });
});
