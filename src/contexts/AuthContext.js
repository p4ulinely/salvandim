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
            "auth/user-disabled": "Essa conta foi desbalitada.",
        };

        return errrorMessagesTranslated.hasOwnProperty(message) ? errrorMessagesTranslated[message] : message;
    }

    const getDataFromStorage = async () => {
        try {
            const uid = await AsyncStorage.getItem('uid');
            const token = await AsyncStorage.getItem('token');
            const email = await AsyncStorage.getItem('email');
            const displayName = await AsyncStorage.getItem('displayName');
            
            return { uid, token, email, displayName };
        } catch (error) {
            console.log(error);
        }
    };

    const setDataOnLocalStorageFromAuthenticatedUser = async () => {
        try {
            const authenticatedUser = auth().currentUser;
            const authenticatedUserToken = await authenticatedUser.getIdToken();
            const userDisplayName = authenticatedUser.displayName ? authenticatedUser.displayName : '';
            
            await AsyncStorage.setItem('uid', authenticatedUser.uid);
            await AsyncStorage.setItem('token', authenticatedUserToken);
            await AsyncStorage.setItem('email', authenticatedUser.email);
            await AsyncStorage.setItem('displayName', userDisplayName);
        } catch (error) {
            console.log(error);
        }
    };

    const clearStorageData = async () => {
        try {
            await AsyncStorage.setItem('uid', '');
            await AsyncStorage.setItem('token', '');
            await AsyncStorage.setItem('email', '');
            await AsyncStorage.setItem('displayName', '');
        } catch (error) {
            console.log(error);
        }
    }

    const handleSignIn = async (email, password) => {
        try {
            if (email && password) {
                await auth().signInWithEmailAndPassword(email, password);
                await setDataOnLocalStorageFromAuthenticatedUser();
                setErrorMessage(''); // TODO: Tentar eliminar esse set, mas garantir que após o request o component seja renderizado.
            }
        } catch (error) {
            console.log(error);
            setErrorMessage(translateErrrorMessage(error.code));
        }
    }

    const handleSignUp = async (name, email, password) => {
        try {
            if (name && email && password) {
                await auth().createUserWithEmailAndPassword(email, password) // criar usuário
                
                const profile = {
                    displayName: name,
                    photoURL: '',
                };
                  
                const authenticatedUser = auth().currentUser;

                await authenticatedUser.updateProfile(profile); // atualiza o nome do usuário que acabou de se cadastrar                //TODO: enviar e-mail para confirmação de e-mail.
                await setDataOnLocalStorageFromAuthenticatedUser();

                setErrorMessage(''); // TODO: Tentar eliminar esse set, mas garantir que após o request o component seja renderizado.
            }
        } catch (error) {
            console.log(error.code);
            setErrorMessage(translateErrrorMessage(error.code));
        }
    }

    const handleSignOut = async () => {
        try {
            await clearStorageData();
            await auth().signOut();
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
                getDataFromStorage,
                setDataOnLocalStorageFromAuthenticatedUser
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}