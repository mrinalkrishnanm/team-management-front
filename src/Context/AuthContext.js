import React, { useEffect, useState } from 'react';
import firebase from "firebase";
import {firebaseConfig, auth} from '../firebase.js';

export const AuthContext = React.createContext();
export const  AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        //function to current current user when auth is changed
       auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setPending(false);
        });
    }, []);
    if(pending){
        return <>Loading...</>
    }
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}