import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #F0DFC8;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
    width: 100%;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
`;

export const ListArea = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
`;

export const TagArea = styled.TouchableOpacity`
    background-color: #4C7FC8;
    border-radius: 30px;
    padding: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const TagTextTitle = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
    font-weight: bold;
`;
export const TagText = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
`;