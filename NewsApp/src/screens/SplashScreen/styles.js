import { Platform } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { moderateScale, scale } from 'react-native-size-matters'
export const styles = (background) =>
    EStyleSheet.create({
        mainContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: Platform.OS === 'ios' ? 20 : 0,
            backgroundColor: background
        },
        splashScreen_RootView: {
            justifyContent: 'center',
            flex: 1,
            margin: 10,
            position: 'absolute',
            width: '100%',
            height: '100%',
        },
        splashScreen_ChildView: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        }
    })
