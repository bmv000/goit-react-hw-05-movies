import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchMovies = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;
export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const SearchFormButton = styled.button`
   display: flex;
    justify-content: center;
    align-items: center;
  border: 0;
  padding: 15px;

 
 
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
}
&:hover {
  opacity: 1;
  color: blue;
}
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  color: black;
  width: 300px;
  height: 40px;
  padding: 5px;
  outline: none;
  border: none;

  &:hover {
    opacity: 1;
    color: blue;
  }
`;
export const SearchFormButtonLabel = styled.span`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;

  padding-left: 4px;
  padding-right: 4px;
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
export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
`;
