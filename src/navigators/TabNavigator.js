import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import MaisScreen from '../screens/MaisScreen';
import TabBarComponent from '../components/TabBarComponent';
const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    MaisScreen: {
        screen: MaisScreen
    }
}, {
    tabBarComponent: (props) => (
        <TabBarComponent {...props} />
    ),
});
export default TabNavigator;