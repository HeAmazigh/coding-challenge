import { configureStore } from '@reduxjs/toolkit';
import cartSlise from './features/cartSlise';

export const store = configureStore({
  reducer: {
    cart: cartSlise,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
