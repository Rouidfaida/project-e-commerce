import {createStore,compose,applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userReducer } from "./userReducer";
import { listreducer } from "./listReducer";

  
  const persistConfig = {
    key: 'root',
    storage: storage,
    // whitelist: ['user'] // which reducer want to store
    // blacklist:['cart']
  };
  
  const rootReducer=listreducer
  const persistedReducer = persistReducer(persistConfig, rootReducer)


let devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store =createStore(persistedReducer,compose(applyMiddleware(thunk),devtools))
const persistor = persistStore(store);
export { persistor, store };
