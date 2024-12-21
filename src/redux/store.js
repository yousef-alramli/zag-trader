import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../redux/contentReducer';

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});
