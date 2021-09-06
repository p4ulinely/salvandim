import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    MessageButton,
    MessageButtonText,
    MessageButtonTextBold,
    MessageButtonError,
    MessageButtonErrorText
} from './styles';

//#region Contextos

import { AuthContext } from '../../contexts/AuthContext'

//#endregion Contextos

//#region Componentes

import LogoComponent from '../../components/Logo';
import DefaultInputComponent from '../../components/DefaultInput';

//#endregion Componentes

//#region Imagens

import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

//#endregion Imagens

import { ScreenName } from '../../screens/ScreenNames';

export default () => {
    const { errorMessage, setErrorMessage, signIn , userToken } = useContext(AuthContext);
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const navigation = useNavigation();

    const clearErrorMessage = () => {
        setErrorMessage('');
    }

    useEffect(() => {
        // clearErrorMessage();
        // console.log('login - auth-token:', userToken)
    }, []);

    const handleCustomButtonClick = () => {
        if (emailField === '' || passwordField === '') {
            return setErrorMessage('Preencha o e-mail e a senha.');
        }

        signIn(emailField, passwordField);
    }

    const handleMessageButtonClick = () => {
        clearErrorMessage();

        navigation.reset({
            routes: [{name: ScreenName.SignUp}]
        })
    }

    return (
        <Container>
            <LogoComponent />

            <InputArea>
                <DefaultInputComponent 
                    IconSvg={EmailIcon} 
                    placeholder="Digite seu e-mail" 
                    value={emailField} 
                    onChangeText={t => setEmailField(t)}
                />
                <DefaultInputComponent 
                    IconSvg={LockIcon} 
                    placeholder="Digite sua senha" 
                    value={passwordField} 
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />
                
                <CustomButton onPress={handleCustomButtonClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>                
            </InputArea>

            <MessageButtonError>
                <MessageButtonErrorText>{errorMessage}</MessageButtonErrorText>
            </MessageButtonError>

            <MessageButton onPress={handleMessageButtonClick}>
                <MessageButtonText>Ainda não possui uma conta? </MessageButtonText>
                <MessageButtonTextBold>Cadastre-se.</MessageButtonTextBold>
            </MessageButton>
        </Container>
    );
}