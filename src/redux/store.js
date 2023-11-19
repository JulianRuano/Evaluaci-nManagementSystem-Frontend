import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import authSlice from './slices/authSlice'
import educatorSlice from './slices/educatorSlice'

const rootReducer = combineReducers({
  auth: authSlice,
  educators: educatorSlice
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'educators'] // Solo persiste el estado de 'auth', agrega otros estados aquí si es necesario
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    }).concat(thunk)
})

export const persistor = persistStore(store)
