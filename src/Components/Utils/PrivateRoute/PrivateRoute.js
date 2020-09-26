import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext} from '../../../Context/AuthContext';
import TopBar from '../../TopBar/TopBar';
import SideBar from '../../SideBar/SideBar';
const PrivateRoute = ({component: Component, ...rest}) => {
    const  { currentUser } = useContext(AuthContext);
    console.log(currentUser)
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            currentUser ? (
                <React.Fragment>
                    <TopBar />
                    <SideBar />
                    <Component {...props} />
                </React.Fragment>
                )
            : <Redirect to="/signup" />
        )} />
    );
};

export default PrivateRoute;