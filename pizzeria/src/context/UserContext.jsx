import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);

    const logout = () =>{
        setToken(false);
        alert("Cerrando sesión");
    };

    return(
        <UserContext.Provider value={{ token, setToken, logout }}>
            { children }
        </UserContext.Provider>
    );
}