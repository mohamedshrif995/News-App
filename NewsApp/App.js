import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import RootNavigation from '@Navigation'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import EStyleSheet from 'react-native-extended-stylesheet'
import reduxStore from './src/redux'

export const reduxPersistStore = persistStore(reduxStore)

const App = () => {
  useEffect(() => {
    EStyleSheet.build()
  }, [])
  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={reduxPersistStore}>

        <RootNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App
