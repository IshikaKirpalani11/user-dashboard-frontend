// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // ✅ Updated path
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  users: userReducer, // name matches userSlice.js -> name: 'users'
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
