import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import Tabs from './Tabs'

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}

export default RootNavigation
