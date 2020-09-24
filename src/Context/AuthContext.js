import React, { useEffect, useState } from 'react';
import firebase from "firebase";
import { firebaseConfig } from '../firebase.js';

export const AuthContext = React.createContext();
const firebaseInit = firebase.initializeApp(firebaseConfig);
export const  AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        //function to current current user when auth is changed
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, []);
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}