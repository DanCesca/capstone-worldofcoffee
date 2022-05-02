import { render, screen } from '@testing-library/react';
import TasteCard from './components/TasteCard';
import App from './App';

describe('App', () => {
  it('renders three articles with an image, a title and a profile description', () => {
    render(<App />);
    const name1 = screen.getByText(/Light Roast/i);
    const image1 = screen.getByAltText(/Light Roast/i);
    const profile1 = screen.getByText(
      /Coffees with this roast present light and fresh flavours. Nuances of berries, fruits and citrus. The taste varies from citrusy to fruity and sweet./i
    );

    const name2 = screen.getByText(/Medium Roast/i);
    const image2 = screen.getByAltText(/Medium Roast/i);
    const profile2 = screen.getByText(
      /These coffees share qualities of low acidity and soft and rich flavours. Flavour nuances vary between nutty and milk-chocolaty to brown sugar and ripe fruits./i
    );

    const name3 = screen.getByText(/Dark Roast/i);
    const image3 = screen.getByAltText(/Dark Roast/i);
    const profile3 = screen.getByText(
      /Dark chocolate, caramel and soft roastiness. All coffees with this kind of roast are bold and full-bodied. Typical roasty flavours are dark chocolate, nuts and dark caramel./i
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
