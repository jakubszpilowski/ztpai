import {Route, Navigate} from 'react-router-dom';

export const ProtectedRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Navigate to="/login"/>
            )
        }
    />
);