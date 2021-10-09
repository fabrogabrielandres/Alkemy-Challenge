import React from 'react';

import {addTeam} from '~/store/slices/heroes/HeroesSlice';
import {Hero, HeroTeam} from '../interfaces/reqSearchInterface';

export const addLogic = (hero: Hero, alignment: string, dispatch:) => {
  console.log('hola');

  const heroTeam: HeroTeam = {
    hero,
    team: alignment,
  };

  console.log('hola dos', heroTeam);

  dispatch(addTeam(heroTeam));
};
