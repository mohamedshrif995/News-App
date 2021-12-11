import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import axios from 'axios'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import Tabs from './Tabs'
import Constants from '@Constants'
import { BATH_URL } from '@Constants'

const { MyDarkTheme, MyLightTheme } = Constants
const RootNavigation = () => {
    const setUrlConfig = () => {
        axios.defaults.baseUrl = BATH_URL
    }
    useEffect(() => {
        setUrlConfig()
    }, [])
    return (
        <NavigationContainer theme={MyLightTheme}>
            <AuthStack />
        </NavigationContainer>
    )
}

export default RootNavigation
