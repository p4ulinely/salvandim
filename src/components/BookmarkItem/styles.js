import React from 'react';
import styled from 'styled-components/native';

export const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const DataArea = styled.View`
    flex-direction: row;    
    background-color: #4C7FC8;
    height: 20px;
    width: 90px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin-top: -25px;
`;

export const DataText = styled.Text`
    font-size: 11px;
    color: #FFFFFF;
    font-weight: bold;
`;

export const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

export const AvatarArea = styled.View`
    flex-direction: column;    
    background-color: #4C7FC8;
    height: 100%;
    width: 50px;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;
export const AvatarText = styled.Text`
    font-size: 15px;
    color: #FFFFFF;
    font-weight: bold;
`;
export const InfoArea = styled.View`
    margin-top: 5px;
    justify-content: space-between;
    width: 100%;
`;

export const InfoTitle = styled.Text`
    font-size: 13px;
    color: #000;
    font-weight: bold;
`;
export const InfoText = styled.Text`
    font-size: 13px;
    color: #172243;
`;

export const TagArea = styled.View`
    margin-top: 10px;
    margin-left: 10px;
    justify-content: flex-start;
    flex-direction: row;
`;

export const TagButton = styled.View`
    height: 26px;
    border: 1px solid #4C7FC8;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`;

export const TagButtonText = styled.Text`
    font-size: 13px;
    color: #4C7FC8;
`;
