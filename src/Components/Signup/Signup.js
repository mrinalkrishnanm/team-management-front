import React, { Component } from 'react';
import  { Button, TextField, Grid } from '@material-ui/core';
import { signInWithGoogle }from '../../firebase.js';
import firebase from 'firebase';
class Signup extends Component { 
    signup = (event) => {
        event.preventDefault();
        const provider =  new firebase.auth.GoogleAuthProvider();
        signInWithGoogle(provider);
    }
    render() {
        return(
            <React.Fragment>
                <form noValidate autoComplete="off">
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs = {6}
                spacing = {3}
                >
                    <TextField className="xs-6" label="Email" />
                    <TextField className="xs-6" label="Password"/>
                </Grid>
                <div>
                    <Button>Add User</Button>
                </div>
                </form>
                <Button variant="contained" color="primary" onClick={this.signup}>Sign up With Google</Button>
            </React.Fragment>
        )
    }
}

export default Signup;