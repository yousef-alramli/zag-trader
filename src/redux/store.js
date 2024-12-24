import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../redux/contentReducer';
import loadingReducer from '../redux/loaderReducer';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    isLoading: loadingReducer
  },
});
