import axios from 'axios';
import React, { createContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState();
    const [user, setUser] = useState();

    const api = axios.create({
        baseURL: 'http://172.16.236.94:80/api',
    });

    const navigate = useNavigate();
  
    const login = (email, password) => {
        api.post('/login', {email:email, password:password})
        .then(response => {
            localStorage.setItem('access_token', response.data.token)
            localStorage.setItem('user_id', response.data.user_id)
            setToken(response.data.token)
            navigate('/')
        }).catch(response => {
            alert("Credenciais Invalidas")
        })
    }

    /* const config = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }

    const success = (error) => {
      toast.success(error, config);
    }
    const error = (error) => {
      toast.error(error, config);
    }
    const warning = (error) => {
      toast.warning(error, config);
    } */

    const logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('access')
        localStorage.removeItem('id')
        setUser(null);
        navigate('/login')
    }

  return (
    <AuthContext.Provider value={{ authenticated: !!user, api, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}