import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'  
import storage from 'redux-persist/lib/storage' 
import allReducers from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['isLogged','userId']
  }
  
  const persistedReducer = persistReducer(persistConfig, allReducers)
  
 
    
  export let store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  export let persistor = persistStore(store)