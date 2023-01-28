import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <p>Opsss! This page doesn't exist.</p>
      <Link to="/">Open home page</Link>
    </div>
  );
};
