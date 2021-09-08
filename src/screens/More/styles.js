import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #F0DFC8;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const SignOutButton = styled.TouchableOpacity`
    height: 40px;
    width: 90px;
    padding: 5px;
    background-color: #4C7FC8;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const SignOutButtonTitle = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
`;

