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

import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

//#endregion Imagens

import { ScreenName } from '../../screens/ScreenNames';

export default () => {
    const { errorMessage, setErrorMessage, signUp } = useContext(AuthContext);
    const [nomeField, setNomeField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    
    const navigation = useNavigation();
    
    const clearErrorMessage = () => {
        setErrorMessage('');
    }

    useEffect(() => {
        // clearErrorMessage();
    }, []);

    const handleCustomButtonClick = () => {
        if (emailField === '' || passwordField === '') {
            return setErrorMessage('Preencha todos os dados!');
        }

        signUp(emailField, passwordField);
    }

    const handleMessageButtonClick = () => {
        clearErrorMessage();

        navigation.reset({
            routes: [{name: ScreenName.SignIn}]
        })
    }

    return (
        <Container>
            <LogoComponent />

            <InputArea>
                <DefaultInputComponent 
                    IconSvg={PersonIcon} 
                    placeholder="Digite seu nome" 
                    value={nomeField} 
                    onChangeText={t => setNomeField(t)}
                />
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
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>                
            </InputArea>

            <MessageButtonError>
                <MessageButtonErrorText>{errorMessage}</MessageButtonErrorText>
            </MessageButtonError>

            <MessageButton onPress={handleMessageButtonClick}>
                <MessageButtonText>Já possui uma conta?</MessageButtonText>
                <MessageButtonTextBold>Faça o login.</MessageButtonTextBold>
            </MessageButton>
        </Container>
    );
}