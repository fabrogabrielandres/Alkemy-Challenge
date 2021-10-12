import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Flex} from '@chakra-ui/layout';
import React from 'react';
import {useSelector} from 'react-redux';

import {Hero} from '~/interfaces/reqSearchInterface';
import HeroesSlice from '../store/slices/heroes/HeroesSlice';
import {InitialState} from '../interfaces/reqSearchInterface';

interface Props {
  hero: Hero;
}

export const TeamsCard = ({hero}: Props) => {
  const HeroesSlice = useSelector((state) => state.HeroesSlice);
  const {allHeroes, teamBad, teamGood}: InitialState = HeroesSlice;

  return (
    <Flex alignItems="center" direction="column" height="100%" justify="center" width="100%">
      <Flex direction="row">
        <Button>Agregar</Button>
      </Flex>
      <Flex>
        {allHeroes
          ? allHeroes.map((hero) => {
              <Image src={hero.image.url} />;
            })
          : null}
      </Flex>
    </Flex>
  );
};
