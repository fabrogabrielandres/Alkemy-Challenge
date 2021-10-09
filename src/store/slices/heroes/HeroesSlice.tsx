import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Hero, HeroTeam } from '../../../interfaces/reqSearchInterface';

interface InitialState {
    allHeroes: Hero[];
    teamBad: Hero[];
    teamGood: Hero[];
}




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


        // addTeam: (state, action: PayloadAction<Hero>) => {
        //         const opcion=true

        //     if (opcion) {
        //         return (
        //             { ...state, teamBad: [...state.teamBad, action.payload] }
        //         )
        //     }
        //     else return ({ ...state, teamGood: [...state.teamGood, action.payload] })
        // }

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





