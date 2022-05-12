import styled from 'styled-components';
import { ReactComponent as CartButton } from '../icons/cart.svg';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackButton } from '../icons/back.svg';
import { NavLink } from 'react-router-dom';

export default function Header({ title, hasBackButton }) {
  const navigate = useNavigate();

  return (
    <HeaderBox>
      {title ? <h1>{title}</h1> : ''}
      {hasBackButton ? (
        <>
          <BackButton
            style={{ width: '30px', heigth: '30px', margin: '1rem' }}
            onClick={() => navigate(-1)}
          ></BackButton>
        </>
      ) : (
        ''
      )}
      <StyledNavLink to="/cart">
        <CartButton style={{ margin: '1.2rem' }} />
      </StyledNavLink>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  background-color: var(--color-light-gray);
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #084d2c;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
