import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsInfo = styled.div`
  display: flex;
`;
export const InfoMovie = styled.div`
  padding: 15px;
`;
export const MovieTitle = styled.h2`
  color: black;
  font-size: 24px;
`;
export const MovieOptionTitle = styled.h3`
  color: black;
  font-size: 20px;
`;
export const MovieOptionText = styled.p`
  color: grey;
  font-size: 16px;
`;

export const MovieInfo = styled.div`
  color: black;
  padding: 15px;
`;
export const MovieImg = styled.img`
  min-width: 320 px;
  mardgin: 0;
`;
export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  min-width: 48px;
  height: 48px;
  border: 0;
  font-size: 16px;
  color: grey;

  background-color: white;

  cursor: pointer;
  outline: none;

  &:hover {
    color: blue;
  }
`;
export const MovieAddition = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
`;
export const MovieAdditionLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: blue;
  }
  &:hover {
    color: blue;
  }
`;
