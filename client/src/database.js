export const tastes = [
  {
    id: '1',
    name: 'Light Roast',
    image: require('./images/light-roast.jpg'),
    teaser: 'You will like this, if you enjoy fruity flavours and a striking acidity.',
    profile:
      'Coffees with this roast present light and fresh flavours. Nuances of berries, fruits and citrus. The taste varies from citrusy to fruity and sweet.',
    sample: [
      {
        id: '1',
        name: 'El Amanecer',
        image: require('./images/sample-light.jpg'),
        flavors: 'Orange, Green Apple, Cherry',
        roast: 'Light',
        description:
          'Our most popular light roasted coffee! The flavor of this coffee is mild and easily approachable. Its fullness hides flavors of orange, green apple and cherry with a discreet acidity.',
        price: '10,40 €',
      },
      {
        id: '2',
        name: 'Guji Light',
        image: require('./images/sample-light.jpg'),
        flavors: 'Honey, Lime, Jasmine',
        roast: 'Light',
        description:
          'Guji Light is a sweet and fruity coffee from the Gabicho Rogicha region in Ethiopia. The flavor is pure, bright and rich with tastes of honey, lime and jasmine.',
        price: '10,40 €',
      },
      {
        id: '3',
        name: 'Holmen Hint',
        image: require('./images/sample-light.jpg'),
        flavors: 'Caramel, Citrus, Bergamot',
        roast: 'Light',
        description:
          'A blend of Sidamo rich and sweet beans, bringing out a complex flavor and flowery aroma, and Guatemalan beans, which give this blend its unique flavor of caramel.',
        price: '10,90 €',
      },
    ],
  },

  {
    id: '2',
    name: 'Medium Roast',
    image: require('./images/medium-roast.jpg'),
    teaser: 'This is for you, if you like the taste of nuts and milk chocolate.',
    profile:
      'These coffees share qualities of low acidity and soft and rich flavours. Flavour nuances vary between nutty and milk-chocolaty to brown sugar and ripe fruits.',
    sample: {
      id: '1',
      name: 'Peru Tunki',
      image: require('./images/sample-medium.jpg'),
      flavors: 'Red Berries, Nuts and Chocolate',
      roast: 'Medium',
      description:
        'Peru Tunki is a medium roasted coffee with a rich mouthfeel and nuances of red berries, nuts and chocolate. The coffee comes from Puno in southern Peru from the Cecovasa cooperative, founded by a group of female farmers.',
      price: '12,90 €',
    },
  },

  {
    id: '3',
    name: 'Dark Roast',
    image: require('./images/dark-roast.jpg'),
    teaser: 'If you like that roasty, strong and sweet taste of coffee, go for this.',
    profile:
      'Dark chocolate, caramel and soft roastiness. All coffees with this kind of roast are bold and full-bodied. Typical roasty flavours are dark chocolate, nuts and dark caramel.',
    sample: {
      id: '1',
      name: 'Brazil Santos',
      image: require('./images/sample-dark.jpg'),
      flavors: 'Dark Chocolate, Nuts',
      roast: 'Dark',
      description:
        'Brazil Santos is a blend of the arabica varieties Mundo Novo, icatu and Acaia. The result of this dark roast is a super soft roastiness with hints of dark chocolate and nuts.',
      price: '10,90 €',
    },
  },
];
