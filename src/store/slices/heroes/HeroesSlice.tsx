import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { Hero, HeroSwap, HeroTeam, InitialState } from '../../../interfaces/reqSearchInterface';



export const fechQuery = createAsyncThunk("heroes/fetchQuery", async (query:string) => {
    const responce = await axios.get(
        `https://superheroapi.com/api.php/10226316108633650/search/${query}`,
    )

    if (responce.data.results) {
        
        return responce.data.results
    }

    return responce;
})

export const HeroesSlice = createSlice({
    name: 'heroes',
    reducers: {
        addTeam: (state, action: PayloadAction<HeroTeam>) => {
            if (action.payload.team === "good") {
                return (
                    { ...state, teamGood: [...state.teamGood, action.payload.hero] })
            }

            if (action.payload.team === "bad") {
                return (
                    { ...state, teamBad: [...state.teamBad, action.payload.hero] })
            }
        },

        swapBad: (state, action: PayloadAction<HeroSwap>) => {
            return {
                ...state, teamBad: state.teamBad.filter((hero) => hero.id !== action.payload.idSwap)
            }
        }
    },
    initialState: {
        allHeroes: [],
        teamBad: [],
        teamGood: [],
        // eslint-disable-next-line
    } as InitialState,
    extraReducers:{
        [fechQuery.fulfilled]: (state,action:Hero[] )=>{
           state.allHeroes=action.payload
        }

    }
});

export const { addTeam } = HeroesSlice.actions;
export default HeroesSlice.reducer;





