import styled from 'styled-components';

function TasteCard({ taste }) {
  return (
    <CardContainer>
      <img src={taste.image} alt={taste.name} />
      <h2>{taste.name}</h2>
      <p>{taste.profile}</p>
    </CardContainer>
  );
}

export default TasteCard;

const CardContainer = styled.article`
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
