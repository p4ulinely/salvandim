import React from 'react';
import { StyleSheet } from 'react-native';

export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 15,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 0,
        borderColor: 'black',
        borderRadius: 4,
        color: '#172243',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0,
        borderColor: 'black',
        borderRadius: 8,
        color: '#172243',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});