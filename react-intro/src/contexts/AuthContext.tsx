import { createContext, useState } from "react";

export interface AuthContextType{
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}


export const AuthContext = createContext({});

export const AuthProvider = (props:any) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)


    return( 
    <AuthContext.Provider 
    value={{isAuthenticated, setIsAuthenticated}}>
        {props.children}
    </AuthContext.Provider>
    )
}