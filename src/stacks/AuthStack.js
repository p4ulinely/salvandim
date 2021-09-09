import React, { useState, useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//#region Componentes

import CustomTabBar from '../components/CustomTabBar';

//#endregion Componentes

//#region Telas

import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';
import NewBookmarkScreen from '../screens/NewBookmark';
import TagsScreen from '../screens/Tags';
import MoreScreen from '../screens/More';

//#endregion Telas

import { ScreenName } from '../screens/ScreenNames';

const Tab = createBottomTabNavigator();

export default () => {

    return (
        <Tab.Navigator tabBar={ props => <CustomTabBar {...props} /> } screenOptions={{ headerShown: false}}>
            <Tab.Screen name={ScreenName.Home} component={HomeScreen} />
            <Tab.Screen name={ScreenName.Explore} component={ExploreScreen} />
            <Tab.Screen name={ScreenName.NewBookmark} component={NewBookmarkScreen} />
            <Tab.Screen name={ScreenName.Tags} component={TagsScreen} />
            <Tab.Screen name={ScreenName.More} component={MoreScreen} />
        </Tab.Navigator>
    );
}