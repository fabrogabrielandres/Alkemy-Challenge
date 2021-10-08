import { createSlice } from '@reduxjs/toolkit';

import { Hero } from '../../../interfaces/reqSearchInterface';

export const HeroesSlice = createSlice({
    name: 'heroes',
    reducers: {
        addHeroList:(state, action) =>{
            
        }
    },
    initialState: {
        allHeroes: [] as Hero[],
        badHeroes: [] as Hero[],
        GoodHeroes: [] as Hero[],

    }
})


export default HeroesSlice.reducer