import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext()


const ContextProvider = ({children}) => {

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const providerofFacebook = new FacebookAuthProvider();

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createNewUser = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginuser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = ()=>{
        return signOut(auth)
    }
    const logInbyGoogle = ()=> {
        return signInWithPopup(auth, provider)
    }
    const logInbyFacebook = ()=>{
        return signInWithPopup(auth, providerofFacebook)
    }
    





    useEffect (()=>{
        let unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])











    const authInfo = {user,loading,createNewUser,loginuser,logOutUser,logInbyGoogle,logInbyFacebook}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;