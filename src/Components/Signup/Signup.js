import React, { Component } from 'react';
import { Button, TextField, Grid, Container, Box } from '@material-ui/core';
import { signInWithGoogle, firebaseConfig } from '../../firebase.js';
import { useHistory } from "react-router-dom";
import firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    header: {
    backgroundColor: '#1976d2',
    margin: 0,
    padding: 0,
    width: '100%'
    }
}));
const Signup = () => {
    const signupStyle = useStyles();
    const history = useHistory();
    const signUpWithGoogle = (event) => {
        event.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        signInWithGoogle(provider, firebaseConfig).then((response) => {
            history.push("/dashboard");
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <React.Fragment>
            <Box height={1}>
                <Box  boxShadow={1} p ={2} display="flex"  m="auto" alignItems="center"
                justifyContent="center"  width="30%">
                    <form noValidate autoComplete="off">
                        <Grid
                        container item className={signupStyle.header}>
                            <h1>Sign up</h1>

                        </Grid>
                        <Grid
                            container item xs={12}>
                                <TextField label="Email" />
                        </Grid>
                        <Grid
                            container item >
                            <Grid item xs={12}>
                                <TextField label="Password" />
                            </Grid>
                        </Grid>
                        <Grid
                            container item xs={12}>
                            <Button color="primary">Add User</Button>
                        </Grid>
                        <Grid
                            container item xs={12}>
                            <Button variant="contained" color="primary" onClick={signUpWithGoogle}>Sign up With Google
                                </Button>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Signup;