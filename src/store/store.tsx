import {configureStore} from '@reduxjs/toolkit';

import HeroesSlice from './slices/heroes/HeroesSlice';

export const store = configureStore({
  reducer: {
    HeroesSlice,
  },
});
