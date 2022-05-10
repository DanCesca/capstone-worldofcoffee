import styled from 'styled-components';
import SelectButton from './SelectButton';
import { useState } from 'react';
import { ReactComponent as CloseButton } from '../icons/close.svg';
import { Link } from 'react-router-dom';

function TasteCard({ taste }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      {isSelected ? (
        <CardContainer>
          <TasteImage src={taste.image} alt={taste.name} />
          <h2>{taste.name}</h2>
          <p>{taste.profile}</p>
          <p>Your coffee journey could start with:</p>
          <SampleImage src={taste.sample[0].image} alt={taste.sample[0].name} />
          <SampleText>
            {taste.sample[0].name}: {taste.sample[0].flavors}
          </SampleText>
          <StyledLink to={`/product/${taste.id}/${taste.sample[0].id}`}>
            <SelectButton>Select</SelectButton>
          </StyledLink>
          <CloseButton style={{ width: '30px' }} onClick={() => setIsSelected(false)}></CloseButton>
        </CardContainer>
      ) : (
        <CardContainer>
          <TasteImage src={taste.image} alt={taste.name} />
          <h2>{taste.name}</h2>
          <p>{taste.teaser}</p>
          <SelectButton onClick={() => setIsSelected(true)}>Read more</SelectButton>
        </CardContainer>
      )}
    </>
  );
}

export default TasteCard;

const CardContainer = styled.li`
  padding: 1.5rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  max-width: 35ch;
  margin: 1rem;
  padding: 1rem;

  p {
    color: var(--color-black);
    padding: 1rem;
  }

  h2 {
    font-style: italic;
    padding: 1rem;
  }
`;

const SampleText = styled.p`
  font-size: 0.85em;
  font-weight: bold;
`;

const TasteImage = styled.img`
  width: 75%;
`;

const SampleImage = styled.img`
  width: 30%;
  border: 1px solid #084d2c;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: inherit;
  text-decoration: none;
  display:block;
`;
