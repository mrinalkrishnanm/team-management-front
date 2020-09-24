import * as firebase from "firebase/app";
import "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyC8oo48sX2ApjlgFCxngNTKuDQMeBmfjtE",
    authDomain: "team-management-app-55239.firebaseapp.com",
    databaseURL: "https://team-management-app-55239.firebaseio.com",
    projectId: "team-management-app-55239",
    storageBucket: "team-management-app-55239.appspot.com",
    messagingSenderId: "930207128374",
    appId: "1:930207128374:web:36f90ed6f8b1682c033197"
}; 
//Google sign in with a popup rather than a redirect
export const signInWithGoogle = (provider) => {
    firebase.auth().signInWithPopup(provider);
};
