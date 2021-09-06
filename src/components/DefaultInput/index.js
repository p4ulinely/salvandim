import React from 'react';
import {
    InputArea,
    Input
} from './styles'

export default (props) => {
    return (
        <InputArea>
            <props.IconSvg width="24" height="24" fill="#B3806D" />
            <Input 
                placeholder={props.placeholder} 
                placeholderTextColor="#B3806D" 
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.password}
            />
        </InputArea>
    );
}