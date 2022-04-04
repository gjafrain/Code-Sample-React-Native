
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga'

import { reducers, rootSaga } from "./modules";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['bottomModal', 'category', 'product', 'address', 'order', 'cart'],
  timeout: null
}
// CREATE SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware(),
  middlewares = applyMiddleware(sagaMiddleware),
  persistedReducer = persistReducer(persistConfig, reducers),
  store = createStore(persistedReducer, {}, compose(middlewares)),
  persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export { store, persistor }