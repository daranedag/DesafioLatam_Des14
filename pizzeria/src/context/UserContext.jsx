import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    const login = async(email, password) =>{
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            const { token, email: userEmail } = response.data;
            setToken(token);
            setEmail(userEmail);
            return true;
        }
        catch(error){
            alert("Error al iniciar sesión: ", error);
            return false;
        }
    };

    const register = async(email, password) =>{
        try{
            const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
            const { token, email: userEmail } = response.data;
            setToken(token);
            setEmail(userEmail);
            return true;
        }
        catch(error){
            alert("Error al iniciar sesión: ", error);
            return false;
        }
    };

    const getProfile = async () =>{
        if(token){
            try{
                const response = await axios.get('http://localhost:5000/api/auth/me', {
                    headers: { 
                        Authorization: `Bearer ${token}`
                    }
                });
                return response.data;
            }
            catch(error){
                alert.error("Error al obtener perfil: ", error);
            }
        }
        return null;
    };

    const logout = () =>{
        setToken(null);
        setEmail(null);
        alert("Cerrando sesión");
    };

    return(
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
            { children }
        </UserContext.Provider>
    );
}