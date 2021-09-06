import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #F0DFC8;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
`;
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #172243;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
`;
export const MessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const MessageButtonText = styled.Text`
    font-size: 18px;
    color: #172243;
`;

export const MessageButtonTextBold = styled.Text`
    font-size: 18px;
    color: #172243;
    font-weight: bold;
    margin-left: 5px;
`;

export const MessageButtonError = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 1px;
    margin-bottom: 1px;
`;

export const MessageButtonErrorText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FF0000;
`;