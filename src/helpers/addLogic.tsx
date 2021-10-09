import React from 'react';
import {useDispatch} from 'react-redux';

import {addTeam} from '~/store/slices/heroes/HeroesSlice';
import {Hero} from '../interfaces/reqSearchInterface';

export const addLogic = (hero: Hero): void => {
  console.log(hero);

  const dispatch = useDispatch();

  dispatch(addTeam(hero));
};
