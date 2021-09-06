import React, { useState, useContext, useEffect } from 'react';
import { Container, LoadingIcon } from './styles';

import { Text } from 'react-native';

//#region Contextos

import { AuthContext } from '../../contexts/AuthContext'

//#endregion Contextos

//#region Componentes

import LogoComponent from '../../components/Logo';

//#endregion Componentes

export default () => {
    const { 
        user, 
        setUser, 
        signOut,
        getTokenFromStorage
    } = useContext(AuthContext);

    const [ storageToken, setStorageToken ] = useState('');

    const handleSignOutClick = async () => {
        await signOut();
        // setStorageToken('');
    }

    const setTokenOnState = async () => {
        const token = await getTokenFromStorage();
        setStorageToken(token);
    };

    useEffect(() => {
        setTokenOnState();
    }, []);

    return (
        <Container>
            <LogoComponent />
            <Text>Home Logado</Text>
            {/* <Text>{JSON.stringify({user})}</Text> */}
            <Text>{storageToken.substring(0, 5)}</Text>
            {/* <Text>{emailUser}</Text> */}
            <Text></Text>
            <Text></Text>
            <Text onPress={handleSignOutClick}>Sair</Text>
        </Container>
    );
}