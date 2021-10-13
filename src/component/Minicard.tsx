import {Image} from '@chakra-ui/image';
import {Flex} from '@chakra-ui/layout';
import {SliderMark} from '@chakra-ui/slider';
import React from 'react';
import {MdPublishedWithChanges} from 'react-icons/md';

import './card.css';
import {useDispatch} from 'react-redux';

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
    <Flex align="center" className="minicard" direction="column" justify="center">
      <Image alt="hero" className="imagen" objectFit="cover" src={hero.image.url} />
      <button className="botonminicard" onClick={agregarHero}>
        <MdPublishedWithChanges />
      </button>
    </Flex>
  );
};
