import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackButton } from '../icons/back.svg';

export default function Header({title, hasBackButton}) {
  const navigate = useNavigate();

  return (
    <HeaderBox >
      {title ? (<h1>{title}</h1>):("")}
      {hasBackButton ? (<><BackButton style={{ width: '30px', heigth: '30px', margin: '1rem' }} onClick={() => navigate(-1)}></BackButton></>) : ("")
      }
      
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
