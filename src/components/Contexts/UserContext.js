import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
    });
    const [loading, setLoading] = useState(true);
    /*.............................
    create user signup form
    ..............................*/
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    /*.............................
        create user login sign in form
        ..............................*/
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    /*.............................
         goolge sign in form
         ...........................*/
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    /*.............................
           create user log out form
           ..............................*/
    const logOut = () => {
        return signOut(auth);
    }
    /*.............................
               unsubscribe
    ..............................*/
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }

    }, []);
    const authInfo = { user, loading, createUser, signIn, logOut, signInWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;