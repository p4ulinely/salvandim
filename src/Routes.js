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
        setDataOnLocalStorageFromAuthenticatedUser 
    } = useContext(AuthContext);

    const [initializing, setInitializing] = useState(true);
    const [uid, setUid] = useState('');

    // Auth listener
    const onAuthStateChanged = (user) => {
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
        if (user){
            await setDataOnLocalStorageFromAuthenticatedUser();
        }

        const uid = await AsyncStorage.getItem('uid');

        setUid(uid);
    })()

    return (
        <NavigationContainer>
            { uid ? <AuthStack /> : <MainStack /> }
        </NavigationContainer>
    );
};

export default Routes;