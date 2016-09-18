import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index.js';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
const createAppStore = applyMiddleware(thunk)(createStore);
console.disableYellowBox = true;
const configureStore = (onComplete) => {
  const store = autoRehydrate()(createAppStore)(reducers);
  const persist = persistStore(store, { storage: AsyncStorage }, onComplete);
  return store;
};

export default configureStore;
