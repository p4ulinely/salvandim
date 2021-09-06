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
        signOut,
        getDataFromStorage
    } = useContext(AuthContext);

    const [ storage, setStorage ] = useState({
        uid: '',
        email: '',
        token: ''
     });

    const setDataOnState = async () => {
        const data = await getDataFromStorage();
        setStorage(data);
    };

    const handleSignOutClick = async () => {
        await signOut();
        // setStorage(null);
    }
    
    useEffect(() => {
        setDataOnState();
    }, []);

    return (
        <Container>
            <LogoComponent />
            <Text>Home Logado</Text>
            <Text></Text>
            <Text>{storage.uid}</Text>
            <Text>{storage.email}</Text>
            
            <Text></Text>
            <Text onPress={handleSignOutClick}>Sair</Text>
        </Container>
    );
}