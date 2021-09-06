import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';

import { AuthContext } from './contexts/AuthContext';

import AuthStack from './stacks/AuthStack';
import MainStack from './stacks/MainStack';

const Routes = () => {
    const {
        user, 
        setUser, 
        userToken, 
        setUserToken, 
        getTokenFromStorage,
        setNewTokenOnLocalStorageFromAuthenticatedUser 
    } = useContext(AuthContext);

    const [initializing, setInitializing] = useState(true);
    const [storageToken, setStorageToken] = useState('');

    // Auth listener
    const onAuthStateChanged = (user) => {
        console.log('onAuthStateChanged:', user !== null);
        setUser(user);

        if (initializing)
            setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    console.log(' render --------------------------------------');

    if (initializing)
        return null; // se tirar esse torno nao aparece Preload?

    (async () => {
        if (user)
            await setNewTokenOnLocalStorageFromAuthenticatedUser();

        const token = await getTokenFromStorage();
        setStorageToken(token);
    })()

    return (
        <NavigationContainer>
            { storageToken ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
    );
};

export default Routes;