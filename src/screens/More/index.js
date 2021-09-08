import React, {useContext, useState, useEffect} from "react";
import { Button, Text } from "react-native";
import { 
    Container,
    Scroller,
    SignOutButton,
    SignOutButtonTitle,
 } from "./styles";

//#region Contextos

import { AuthContext } from '../../contexts/AuthContext';

//#endregion Contextos

//#region Componentes

import LogoComponent from '../../components/Logo';

//#endregion Componentes

export default () => {
    const { 
        signOut,
        getDataFromStorage
    } = useContext(AuthContext);

    const [userBasicInfo , setUserBasicInfo] = useState({});

    const handleSignOutClick = async () => {
        await signOut();
    }

    const getUserBasicInfoFromStorageAndSetOnState = async () => {
        const data = await getDataFromStorage();
        setUserBasicInfo(data);
    };

    useEffect(() => {
        getUserBasicInfoFromStorageAndSetOnState(); 
    }, []);

    return (
        <Container>
            <LogoComponent corLogo={"azul"} />
                <Text>{userBasicInfo.uid}</Text>
                <Text>{userBasicInfo.email}</Text>
                
                <Text></Text>
                
                <SignOutButton onPress={handleSignOutClick}>
                    <SignOutButtonTitle>SAIR</SignOutButtonTitle>
                </SignOutButton>
        </Container>
    );
}