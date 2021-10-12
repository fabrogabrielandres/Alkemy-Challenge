import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {  HeroTeam, InitialState } from '../../../interfaces/reqSearchInterface';

 




export const HeroesSlice = createSlice({
    name: 'heroes',
    reducers: {

        addTeam: (state, action: PayloadAction<HeroTeam>) => {

            if (action.payload.team === "bad") {
                return (
                    { ...state, teamBad: [...state.teamBad, action.payload.hero] }
                )
            }
            else return ({ ...state, teamGood: [...state.teamGood, action.payload.hero] })
        },

    },
    initialState: {
        allHeroes: [],
        teamBad: [],
        teamGood: [],
        // eslint-disable-next-line
    } as InitialState,
});

export const { addTeam } = HeroesSlice.actions;
export default HeroesSlice.reducer;





