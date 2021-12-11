import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tabs from './Tabs'
import SplashScreen from '@Screen/SplashScreen'
import NewsDetails from '@Screen/NewsDetails'
import CategoryList from '@Screen/CategoryList'

const MainStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='Tabs' component={Tabs} />
            <Stack.Screen name='NewsDetails' component={NewsDetails} />
            <Stack.Screen name='CategoryList' component={CategoryList} />
        </Stack.Navigator>
    )
}

export default MainStack
