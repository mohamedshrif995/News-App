import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { connect } from 'react-redux'
import Tabs from './Tabs'
import SplashScreen from '@Screen/SplashScreen'
import Login from '@Screen/Login'
import Register from '@Screen/Register'
import Onboarding from '@Screen/Onboarding'
import NewsDetails from '@Screen/NewsDetails'
import CategoryList from '@Screen/CategoryList'

const AuthStack = (props) => {
    console.log('propsauthstack', props);
    const { isBoardingDisabled } = props
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName={isBoardingDisabled ? 'SplashScreen' : 'Onboarding'} screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='Tabs' component={Tabs} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Onboarding' component={Onboarding} />
            <Stack.Screen name='NewsDetails' component={NewsDetails} />
            <Stack.Screen name='CategoryList' component={CategoryList} />
        </Stack.Navigator>
    )
}

const mapStateToProps = (state) => {
    return {
        isBoardingDisabled: state.auth.isBoardingDisabled
    }
}
export default connect(mapStateToProps)(AuthStack)
