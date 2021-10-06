import { createSlice } from '@reduxjs/toolkit';

import { Hero } from '../../../interfaces/reqSearchInterface';

export const HeroesSlice = createSlice({
    name: 'heroes',
    reducers: {},
    initialState: {
        allHeroes: [] as Hero[],
    }
})


export default HeroesSlice.reducer