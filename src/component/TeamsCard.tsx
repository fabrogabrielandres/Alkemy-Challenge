import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Flex} from '@chakra-ui/layout';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import noimagejpg from '../assets/noimage.jpg';
import {Hero} from '~/interfaces/reqSearchInterface';
import HeroesSlice, {addTeam} from '../store/slices/heroes/HeroesSlice';
import {InitialState, HeroTeam} from '../interfaces/reqSearchInterface';

import {MiniCard} from './Minicard';

interface Props {
  hero: Hero;
}

export const TeamsCard = ({hero}: Props) => {
  const dispatch = useDispatch();
  const HeroesSlice = useSelector((state) => state.HeroesSlice);
  const {allHeroes, teamBad, teamGood}: InitialState = HeroesSlice;

  const agregarHero = () => {
    const data: HeroTeam = {
      hero: hero,
      team: 'bad',
    };

    dispatch(addTeam(data));
  };

  return (
    <Flex alignItems="center" direction="column" height="100%" justify="center" width="100%">
      <Flex direction="row">
        <Button onClick={agregarHero}>Agregar</Button>
      </Flex>
      <Flex align="center" background="red" direction="row" justify="center">
        {teamBad.map((hero, idx) => (
          <MiniCard key={idx} hero={hero} />
        ))}
      </Flex>
    </Flex>
  );
};
