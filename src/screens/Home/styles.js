import React from 'react';
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
    width: 90%;
`;
export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #F0DFC8;
    width: 100%;
`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;
export const SearchArea = styled.View`
    background-color: #E0B796;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 25px;
    width: 90%
`;
export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
`;
export const SearchFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
`;
export const ListArea = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
`;
