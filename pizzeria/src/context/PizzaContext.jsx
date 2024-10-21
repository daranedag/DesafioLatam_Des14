import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPizzas = async () =>{
        setLoading(true);
        try{
            const response = await axios.get('http://localhost:5000/api/pizzas');
            setPizzas(response.data);
            setLoading(false);
        }
        catch(err){
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPizzas();
    }, []);

    return(
        <PizzaContext.Provider value={{ pizzas, loading, error, fetchPizzas }}>
            { children }
        </PizzaContext.Provider>
    );
};