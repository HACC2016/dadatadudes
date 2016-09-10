import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers/index.js';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

// var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

// var logger = createLogger({
//   predicate: (getState, action) => isDebuggingInChrome,
//   collapsed: true,
//   duration: true,
// });

var createAppStore = applyMiddleware(thunk)(createStore);

const configureStore = (onComplete) => {
  const store = autoRehydrate()(createAppStore)(reducers);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  return store;
}
export default configureStore;
