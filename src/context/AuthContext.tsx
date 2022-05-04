import React, {createContext} from 'react'

interface Props {
    children: React.ReactChild
}

export const AuthContext = createContext<any>(null)

export const AuthProvider = ({children} : Props) => 
    <AuthContext.Provider value={{login: true}}>
        {children}
    </AuthContext.Provider>
