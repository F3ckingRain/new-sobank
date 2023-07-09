import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import configReducer from '../reducers/ConfigSlice/ConfigSlice';
import creditParamsReducer from '../reducers/CreditParamsSlice/CreditParamsSlice';
import modalReducer from '../reducers/ModalSlice/ModalSlice';
import userReducer from '../reducers/UserSlice/UserSlice';

import { AuthApi } from '@/api/AuthApi/AuthApi';
import { DadataApi } from '@/api/DadataApi/DadataApi';

const rootReducer = combineReducers({
  [AuthApi.reducerPath]: AuthApi.reducer,
  userReducer,
  modalReducer,
  creditParamsReducer,
  configReducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat(AuthApi.middleware),
    // .concat(DadataApi.middleware),
    devTools: !import.meta.env.PROD,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

const store = setupStore();

setupListeners(store.dispatch);
export default store;
