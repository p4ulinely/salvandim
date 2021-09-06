import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { ScreenName } from '../ScreenNames';

import LogoComponent from './../../components/Logo';

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        (async () =>  {
            const storageToken = await AsyncStorage.getItem('token');
            // console.log('preload:', storageToken);
            if (!storageToken) {
                navigation.navigate(ScreenName.SignIn);
            }

        })()
    }, []);

    return (
        <Container>
            <LogoComponent />
            <LoadingIcon size="large" color="#B3806D" />
        </Container>
    );
}