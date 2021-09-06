import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PreloadScreen from '../screens/Preload';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';

import { ScreenName } from '../screens/ScreenNames';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.Preload} screenOptions={{ headerShown: false}}>
            <Stack.Screen name={ScreenName.Preload} component={PreloadScreen} />
            <Stack.Screen name={ScreenName.SignIn} component={SignInScreen} />
            <Stack.Screen name={ScreenName.SignUp} component={SignUpScreen} />
        </Stack.Navigator>
    );
}