import React from 'react'
import { View, Text, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const slides = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('@Assets/doodle_reading.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('@Assets/frontal_home.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('@Assets/stting_on_floor.png'),
        backgroundColor: '#22bcb5',
    }
];
const Onboarding = () => {
    const [showRealApp, setShowRealApp] = React.useState(false)
    const navigation = useNavigation()

    const _renderItem = ({ item }) => {
        return (
            <View style={styles().slides}>
                <View style={styles().titleContainer}>
                    <Text style={styles().title}>{item.title}</Text>
                </View>

                <View style={styles().imageContainer}>
                    <Image source={item.image} style={styles().image} resizeMode='contain' />
                </View>

                <View style={styles().textContainer}>
                    <Text style={styles().text}>{item.text}</Text>
                </View>

            </View>
        );
    }
    const _renderNextButton = () => {
        return (
            <View style={styles().buttonCircle}>
                <Icon
                    name="arrow-forward-outline"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    const _renderDoneButton = () => {
        return (
            <View style={styles().buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    const _renderSkipButton = () => {
        return (
            <View style={styles().skipView}>
                <Text style={styles().skipTextColor}>Skip</Text>
            </View>
        );
    };
    const _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        // setShowRealApp(true)
        navigation.navigate('Login');
    }
    return (
        <View style={{ flex: 1 }}>
            <AppIntroSlider
                renderItem={_renderItem}
                data={slides}
                onDone={_onDone}
                renderDoneButton={_renderDoneButton}
                renderNextButton={_renderNextButton}
                renderSkipButton={_renderSkipButton}
                onSkip={_onDone}
                dotClickEnabled={true}
                showNextButton={true}
                showDoneButton
                showSkipButton={true}
            />

        </View>
    )
}

export default Onboarding
