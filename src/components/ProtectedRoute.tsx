import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import UserContext from '../contexts/UserContext';

export interface ProtectedRouteProps extends RouteProps {
  //authenticated: boolean;
  //isAllowed: boolean;
  //restrictedPath: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  let redirectPath = '';
  const { user } = useContext(UserContext);
  if (!user) {
    redirectPath = '/login';
    console.log('redirecting because not authenticated');
  }
  // if (props.isAuthenticated && !props.isAllowed) {
  //   redirectPath = props.restrictedPath;
  // }

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    console.log(props);

    return <Route {...props} />;
  }
};

export default ProtectedRoute;
