import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// Persisting token field from auth slice to localstorage

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // auth: authReducer,

    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      // {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
