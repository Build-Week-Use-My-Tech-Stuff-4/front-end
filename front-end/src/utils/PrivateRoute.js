import React from 'react';
import {Route, Redirect} from 'react-router-dom'

// Gets token to be able to access private server 
const PrivateRoute = ({ component: Component, ...rest}) => {
    const token = window.localStorage.getItem('token');
    return (
        <Route {...rest} render={props => {
            if (token) {
                return <Component {...props} />
            } else {
                return <Redirect to='/' />
            }
        }} />
    );
};

export default PrivateRoute;