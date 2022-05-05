import React, {createContext} from 'react'
import {auth} from '../firebase.config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
interface Props {
    children: React.ReactChild
}

export const AuthContext = createContext<any>(null)

const signup = (email : string, password : string) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

export const AuthProvider = ({children} : Props) => 
    <AuthContext.Provider value={signup}>
        {children}
    </AuthContext.Provider>
