import { NavigationLink, NavigationList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </li>
      </NavigationList>
    </nav>
  );
};
