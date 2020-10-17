import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext} from '../../../Context/AuthContext';
import TopBar from '../../TopBar/TopBar';
import SideBar from '../../SideBar/SideBar';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    componentStyle: {
    marginLeft: 240,
    height: '100%',
    padding: theme.spacing(5),
    marginTop: 50
    }
}));
const PrivateRoute = ({component: Component, ...rest}) => {
    const style = useStyles();
    const  { currentUser } = useContext(AuthContext);
    // const currentUser = true;
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            currentUser ? (
                <React.Fragment>
                    <TopBar />
                    <SideBar />
                    <Container className={style.componentStyle}>
                        <Component {...props} />
                    </Container>
                </React.Fragment>
                )
            : <Redirect to="/signup" />
        )} />
    );
};

export default PrivateRoute;