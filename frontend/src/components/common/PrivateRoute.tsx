import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<Props> = ({ children }): JSX.Element => {
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  if (isLoggedIn) return <>{children}</>;
  return <Navigate to="/login" />;
};
