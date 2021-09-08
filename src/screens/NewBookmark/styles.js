import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #F0DFC8;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;
export const NewBookmarkDescriptionArea = styled.View`
    background-color: #4C7FC8;
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
export const NewBookmarkDescriptionInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;
export const NewBookmarkTitleArea = styled.View`
    background-color: #4C7FC8;
    border-radius: 30px;
    flex-direction: row;
    /*align-items: flex-end;*/
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
export const NewBookmarkTitleInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
`;
export const NewBookmarkAddButton = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;