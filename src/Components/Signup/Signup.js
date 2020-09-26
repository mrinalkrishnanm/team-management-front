import React, { Component } from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { signInWithGoogle, firebaseConfig } from '../../firebase.js';
import { useHistory } from "react-router-dom";
import firebase from 'firebase';

const Signup = () => {
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
            <Grid
                container
                spacing={1} alignItems='center'>
                <form noValidate autoComplete="off">
                    <Grid
                        container item xs={12}>
                        <Grid item>
                            <TextField label="Email" />
                        </Grid>
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
            </Grid>
        </React.Fragment>
    )
}

export default Signup;