import {signInWithEmailAndPassword, createContext, useEffect, useState ,createUserWithEmailAndPassword,onAuthStateChanged} from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singIn=(email,password)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
       const unsuscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsuscribe()
        }
    },[])

    const userInfo={
        user,
        loading,
        createUser,
        singIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;