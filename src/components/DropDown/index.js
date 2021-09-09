import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { 
    pickerSelectStyles
} from './styles'

export default (props) => {
    return (
        <RNPickerSelect
            onValueChange={props.onValueChange}
            useNativeAndroidPickerStyle={props.useNativeAndroidPickerStyle}
            placeholder={props.placeholder}
            items={props.items}
            style={{
                ...pickerSelectStyles,
                placeholder: {
                    color: '#172243',
                    fontSize: 16,
                },
            }}
            Icon={props.Icon}
        />
    );
};