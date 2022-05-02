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
    const name = screen.getByText(/Light Roast/i);
    const image = screen.getByAltText(/Light Roast/i);
    const profile = screen.getByText(
      /Coffees with this roast present light and fresh flavours. Nuances of berries, fruits and citrus. The taste varies from citrusy to fruity and sweet./i
    );

    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
  });
});
