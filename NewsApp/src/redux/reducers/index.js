import { persistCombineReducers } from 'redux-persist'
import Constants from '@Constants'
import AsyncStore from '@react-native-community/async-storage'
import authReducer from './authReducers'
const config = {
    key: Constants.asyncStorageKey,
    storage: AsyncStore,
    blacklist: []
}

const appReducers = persistCombineReducers(config, {
    auth: authReducer
})

const rootReducers = (state, action) => {
    return appReducers(state, action)
}

export default rootReducers