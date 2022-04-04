/** @format */

import "react-native-gesture-handler"
import React, { useEffect } from "react"
import { LogBox, SafeAreaView } from "react-native"
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import RNBootSplash from "react-native-bootsplash"
//

import { store, persistor } from "./src/redux/store"
import Main from "./src/Main"
import { closeConfig, openConfig } from "./src/utils/navigationConfig"
import { PRIMARY, THIRD, WHITE } from "./src/styles/colors"

const MainStack = createStackNavigator()

function App() {
  LogBox.ignoreAllLogs()

  useEffect(() => {
    RNBootSplash.hide({ fade: true, duration: 250 })
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <SafeAreaView style={{ flex: 1 }}> */}
          <NavigationContainer theme={{ colors: { background: PRIMARY } }}>
            <MainStack.Navigator
              headerMode='none'
              screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                transitionSpec: {
                  open: openConfig,
                  close: closeConfig,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            >
              <MainStack.Screen name='/' component={Main} />
            </MainStack.Navigator>
          </NavigationContainer>
        {/* </SafeAreaView> */}
      </PersistGate>
    </Provider>
  )
}

export default App
