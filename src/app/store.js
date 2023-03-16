import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { configureStore } from '@reduxjs/toolkit';

// Tu código aquí

export default configureStore({
reducer: {
[cryptoApi.reducerPath]: cryptoApi.reducer,
[cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(
cryptoApi.middleware,
cryptoNewsApi.middleware,
),
});