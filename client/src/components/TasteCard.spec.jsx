import { render, screen } from '@testing-library/react';
import TasteCard from './TasteCard';

const taste = {
  id: '1',
  name: 'Light Roast',
  image: 'light-roast.jpg',
  profile:
    'Coffees with this roast present light and fresh flavours. Nuances of berries, fruits and citrus. The taste varies from citrusy to fruity and sweet.',
};

describe('TasteCard', () => {
  it('renders an article with an image, a title and a profile description', () => {
    render(<TasteCard taste={taste}></TasteCard>);
    const name = screen.getByRole('heading');
    const image = screen.getByRole('img');
    const profile = screen.getByText(/fruity/i);

    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
  });
});
