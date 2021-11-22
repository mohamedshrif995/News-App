import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true)
    const navigation = useNavigation()

    const hideSplashScreen = () => {
        setIsVisible(false)
    }
    useEffect(() => {
        setTimeout(() => {
            hideSplashScreen()
            navigation.navigate('Onboarding')
        }, 4000)
    }, [])
    const renderSplashScreen = () => {
        return (
            <View style={styles().splashScreen_RootView} >
                <View style={styles().splashScreen_ChildView}>
                    <Image source={require('@Assets/splash_icon_dark.png')}
                        style={{ width: 150, height: 150, resizeMode: 'contain' }}
                    />
                </View>
            </View>
        )
    }
    return (
        <View style={styles().mainContainer}>
            {isVisible === true ? renderSplashScreen() : null}
        </View>
    )
}

export default SplashScreen
