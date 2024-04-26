import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [reload, setReload] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register
    const createUser = (email, pass) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // update register
    const updateUserProfile = (name, image)=>{
        setLoading(true);
        return updateProfile (auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    // login
    const logInUser = (email, pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    // google log in
    const googleLogIn =()=>{
        return signInWithPopup(auth, googleProvider);
    }

    // github log in
    const githubLogIn = () =>{
        return signInWithPopup(auth, githubProvider);
    }
    
    // sign out
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("state changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }

    }, [reload])

    const authInfo = {
        user,
        loading,
        setReload,
        createUser,
        updateUserProfile,
        logInUser,
        googleLogIn,
        githubLogIn,
        signOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.node,
}

export default AuthProvider;