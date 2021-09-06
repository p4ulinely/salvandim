import React from 'react';
import { Image } from 'react-native';
// import ResponsiveImage from '../ResponsiveImage';

export default (props) => {
    return (
        // <ResponsiveImage
        //     src={require("../../assets/salvandim_logo_quadrado.png")}
        //     srcWidth={300}
        //     srcHeight={300}
        // />
        <Image 
            source={require('../../assets/logo2.png')} 
            style={{
                height: "25%"
            }}
        ></Image>
    );
}
