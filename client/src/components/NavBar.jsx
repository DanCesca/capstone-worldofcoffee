import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../icons/home.svg';
import { ReactComponent as Fav } from '../icons/heart.svg';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <NavWrapper>
      <NavList role="list">
        <StyledNavLink to="/">
          <Home style={{ width: '30px', heigth: '30px' }} />
        </StyledNavLink>
        <StyledNavLink to="/favourites">
          <Fav style={{ width: '30px', heigth: '30px' }} />
        </StyledNavLink>
      </NavList>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  border-top: 1px solid var(--color-green);
  background-color: var(--color-light-gray);
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  color: inherit;
  text-decoration: none;
`;
