import {Image} from '@chakra-ui/image';
import {Box, Flex} from '@chakra-ui/layout';
import React from 'react';
import {MdPublishedWithChanges} from 'react-icons/md';

import './card.css';
import {useDispatch} from 'react-redux';
import {Button} from '@chakra-ui/button';

import {Hero} from '../interfaces/reqSearchInterface';
import {addTeam} from '~/store/slices/heroes/HeroesSlice';

interface Props {
  hero: Hero;
}

export const MiniCard = ({hero}: Props) => {
  const dispatch = useDispatch();

  const agregarHero = () => {
    const data = {
      hero: hero,
      team: 'bad',
    };

    dispatch(addTeam(data));
  };

  return (
    <Box>
      <Button onClick={agregarHero}>
        <MdPublishedWithChanges />
      </Button>
      <Image alt="hero" h={120} src={hero.image.url} />
    </Box>
  );
};
