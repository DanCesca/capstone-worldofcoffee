import styled from 'styled-components';
import SelectButton from './SelectButton';
import { useState } from 'react';

function TasteCard({ taste }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      {isSelected ? (
        <CardContainer>
          <img src={taste.image} alt={taste.name} />
          <h2>{taste.name}</h2>
          <p>{taste.profile}</p>
          <p>Your coffee journey could start with:</p>
          <SelectButton onClick={() => setIsSelected(false)}>Close</SelectButton>
        </CardContainer>
      ) : (
        <CardContainer>
          <img src={taste.image} alt={taste.name} />
          <h2>{taste.name}</h2>
          <p>{taste.teaser}</p>
          <SelectButton onClick={() => setIsSelected(true)}>Select</SelectButton>
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

  img {
    width: 75%;
  }

  h2 {
    font-style: italic;
    padding: 1rem;
  }
`;
