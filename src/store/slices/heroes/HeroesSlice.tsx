import { createSlice, PayloadAction } from '@reduxjs/toolkit';


import { HeroSwap, HeroTeam, InitialState } from '../../../interfaces/reqSearchInterface';







export const HeroesSlice = createSlice({
    name: 'heroes',
    reducers: {
        addTeam: (state, action: PayloadAction<HeroTeam>) => {
            if (action.payload.team === "good") {
                console.log(action.payload);

                return (
                    {
                        ...state, teamGood: [...state.teamGood, action.payload.hero]
                    }
                )
            }
            if (action.payload.team === "bad") {
                console.log(action.payload);


                return (
                    {
                        ...state, teamBad: [...state.teamBad, action.payload.hero]
                    }
                )
            }

        },
        swapBad: (state, action: PayloadAction<HeroSwap>) => {
            return {
                ...state, teamBad: [...state.teamBad, action.payload.hero]
            }

        }

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





