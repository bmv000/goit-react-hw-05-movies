import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 0;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  margin-left: 15px;
  color: grey;
  &:hover,
  &:focus {
    color: blue;
  }
`;
