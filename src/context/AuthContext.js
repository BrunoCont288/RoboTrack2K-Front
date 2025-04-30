// src/context/AuthContext.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (email, password) => {
        setIsLoading(true);
        // Substitua pela sua chamada de API real
        axios.post('https://seuservidor.com/login', { email, password })
            .then(response => {
                let userInfo = response.data;
                setUserInfo(userInfo);
                setUserToken(userInfo.token);

                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                AsyncStorage.setItem('userToken', userInfo.token);

                setIsLoading(false);
            })
            .catch(e => {
                console.log(`Login error ${e}`);
                setIsLoading(false);
            });
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    };

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }
            setIsLoading(false);
        } catch (e) {
            console.log(`isLogged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                isLoading,
                userToken,
                userInfo
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};