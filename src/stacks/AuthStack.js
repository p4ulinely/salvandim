import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';

import { ScreenName } from '../screens/ScreenNames';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.Home} screenOptions={{ headerShown: false}}>
            <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
        </Stack.Navigator>
    );
}