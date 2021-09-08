import React from 'react';
import { Image } from 'react-native';
// import ResponsiveImage from '../ResponsiveImage';

export default (props) => {

    return (
        <Image 
            source={props.corLogo == "azul" ? require('../../assets/logo3.png') : require('../../assets/logo2.png')} 
            style={ props.corLogo == "azul" ?
                {
                    height: "25%",
                    marginTop: -25
                } 
                : 
                { 
                    height: "25%" 
                }}
        >
        </Image>
    );
}
