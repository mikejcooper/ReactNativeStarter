import AsyncStorage from "@react-native-community/async-storage"
import { Root } from "native-base"
import React, { Component } from "react"
import { UIManager } from "react-native"
import { Provider } from "react-redux"
import { applyMiddleware, compose, createStore } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import createSagaMiddleware from "redux-saga"
import NavigatorContainer from "./config/routes/NavigatorContainer"
import warnings from "./config/utils/errors/Warnings"
import reducer from "./reducers"
import rootSaga from "./sagas"

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [], // ['profile', 'settings', ...etc]
}

const customLogger = store => next => action => {
  console.log(`ACTION: ${action.type}`)
  next(action)
}

const composeEnhancers = __DEV__ ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose : compose
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, customLogger]
const enhancer = composeEnhancers(applyMiddleware(...middleware))
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, enhancer)
let persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
warnings.setIgnore()

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <NavigatorContainer />
          </Root>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
