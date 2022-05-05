import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderBox>
      <h1>World of Coffee</h1>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  background-color: var(--color-light-gray);
  display: flex;
  justify-content: left;
  border-bottom: 2px solid #084d2c;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
