import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #F0DFC8;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

export const TagArea = styled.View`
    border-radius: 15px;
    background-color: #E0B796;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 25px;
    width: 90%;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
`;
export const TagInput = styled.TextInput`
    flex: 1;
    padding-left: 10px;
    font-size: 16px;
    color: #172243;
`;
export const PrivacyArea = styled.View`
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 25px;
    width: 90%;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
`;
export const DescriptionArea = styled.View`
    background-color: #E0B796;
    border-radius: 15px;
    flex-direction: row;
    /*align-items: flex-end;*/
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 25px;
    width: 90%;
    height: 100px;
    padding-left: 20px;
    padding-right: 20px;
`;
export const DescriptionInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #172243;
`;
export const TitleArea = styled.View`
    background-color: #4C7FC8;
    border-radius: 30px;
    flex-direction: row;
    /*align-items: flex-end;*/
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 25px;
    margin-left: 20px;
    flex: 12;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
`;
export const TitleInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
`;
export const AddButton = styled.TouchableOpacity`
    background-color: #4C7FC8;
    border-radius: 30px;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 25px;
    margin-left: 10px;
    margin-right: 20px;
    padding-left: 20px;
    padding-right: 20px;
    flex: 1;
`;

export const FooterArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 15px;
    width: 100%;
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