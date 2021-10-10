import React from 'react';

import {addTeam} from '~/store/slices/heroes/HeroesSlice';
import {Hero, HeroTeam} from '../interfaces/reqSearchInterface';

export const addLogic = (hero: Hero, alignment: string, dispatch, state) => {
  console.log(alignment);

  const heroTeam: HeroTeam = {
    hero,
    team: alignment,
  };

  if (state.HeroesSlice.teamBad.length < 3 && alignment === 'bad') {
    dispatch(addTeam(heroTeam));
  } else {
    if (state.HeroesSlice.teamGood.length < 3 && alignment === 'good') {
      dispatch(addTeam(heroTeam));
    } else {
      alert('ddd');
    }
  }
};
