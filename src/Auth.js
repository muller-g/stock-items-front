import axios from 'axios';
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('access_token'));

    const navigate = useNavigate();
  
    const login = (email, password) => {
        axios.post(process.env.REACT_APP_API + '/login', {email:email, password:password})
        .then(response => {
            localStorage.setItem('access_token', response.data.token)
            localStorage.setItem('user_id', response.data.user_id)
            setToken(response.data.token)
            navigate('/')
        }).catch(response => {
            alert("Credenciais Invalidas")
        })
    }

    const config = {
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
    }

    const logout = () => {
      axios.post(process.env.REACT_APP_API + '/auth/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => {
          localStorage.removeItem('access_token')
          localStorage.removeItem('user_id')
          navigate('/login')
        })
    }

  return (
    <AuthContext.Provider value={{ authenticated: success, error, warning, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}