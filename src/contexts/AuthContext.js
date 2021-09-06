import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userToken, setUserToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const translateErrrorMessage = (message) => {
        const errrorMessagesTranslated = {
            "auth/email-already-in-use": "E-mail informado já está em uso!",
            "auth/invalid-email": "E-mail informado é inválido!",
            "auth/weak-password": "A senha precisa ter ao menos 6 caracteres.",
            "auth/user-not-found": "E-mail ou senha não conferem.",
            "auth/wrong-password": "E-mail ou senha não conferem.",
        };

        return errrorMessagesTranslated.hasOwnProperty(message) ? errrorMessagesTranslated[message] : message;
    }

    const getTokenFromStorage = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            return token;
        } catch (error) {
            console.log(error);
        }
    };

    const setNewTokenOnLocalStorageFromAuthenticatedUser = async () => {
        try {
            const authenticatedUserToken = await auth().currentUser.getIdToken();
            await AsyncStorage.setItem('token', authenticatedUserToken); // set on local storage
        } catch (error) {
            console.log(error);
        }
    };

    const clearStorageTokenOfStorage = async () => {
        try {
            await AsyncStorage.setItem('token', '');
        } catch (error) {
            console.log(error);
        }
    }

    const handleSignIn = async (email, password) => {
        try {
            if (email && password) {
                await auth().signInWithEmailAndPassword(email, password);
                await setNewTokenOnLocalStorageFromAuthenticatedUser();
                setErrorMessage(''); // TODO: Tentar eliminar esse set, mas garantir que após o request o component seja renderizado.
            }
        } catch (error) {
            console.log(error);
            setErrorMessage(translateErrrorMessage(error.code));
        }
    }

    const handleSignUp = async (email, password) => {
        try {
            if (email && password) {
                await auth().createUserWithEmailAndPassword(email, password);
                await setNewTokenOnLocalStorageFromAuthenticatedUser();
                setErrorMessage(''); // TODO: Tentar eliminar esse set, mas garantir que após o request o component seja renderizado.
            }
        } catch (error) {
            console.log(error.code);
            setErrorMessage(translateErrrorMessage(error.code));
        }
    }

    const handleSignOut = async () => {
        try {
            await auth().signOut();
            await clearStorageTokenOfStorage();
        } catch (error) {
            console.log(error);
            setErrorMessage(translateErrrorMessage(error.code));
        }
    }

    return (
        <AuthContext.Provider 
            value={{
                user, 
                setUser,
                userToken,
                setUserToken,
                errorMessage,
                setErrorMessage,
                signIn: handleSignIn,
                signUp: handleSignUp,
                signOut: handleSignOut,
                getTokenFromStorage,
                setNewTokenOnLocalStorageFromAuthenticatedUser
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}