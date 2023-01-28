import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }
`;
export const NavigationList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;
