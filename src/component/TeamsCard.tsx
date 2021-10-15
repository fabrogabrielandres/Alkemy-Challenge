import {Button} from '@chakra-ui/button';
import {Flex, Grid, GridItem} from '@chakra-ui/layout';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Image} from '@chakra-ui/image';

import {Hero} from '~/interfaces/reqSearchInterface';
import {addTeam} from '../store/slices/heroes/HeroesSlice';
import {InitialState, HeroTeam} from '../interfaces/reqSearchInterface';

interface Props {
  hero: Hero;
}

export const TeamsCard = ({hero}: Props) => {
  const dispatch = useDispatch();
  const HeroesSlice = useSelector((state) => state.HeroesSlice);
  const {teamBad, teamGood}: InitialState = HeroesSlice;

  const agregarHero = (alignment: string) => {
    const data: HeroTeam = {
      hero: hero,
      team: alignment,
    };

    dispatch(addTeam(data));
  };

  return (
    <Grid background="black" gridTemplateRows="repeat(2,1fr)" h="100%" w="100%">
      {/* heroes malos */}
      <GridItem bg="red">
        <Flex justifyContent="space-around">
          {teamGood.map((hero, idx) => (
            <>
              <Image key={idx} alt="hero" h={120} src={hero.image.url} />
            </>
          ))}
        </Flex>
        <Button onClick={() => agregarHero('good')}>good</Button>
      </GridItem>

      {/* heroes malos */}
      <GridItem bg="tomato">
        <Flex justifyContent="space-around">
          {teamBad.map((hero, idx) => (
            <>
              <Image key={idx} alt="hero" h={120} src={hero.image.url} />
            </>
          ))}
        </Flex>
        <Button onClick={() => agregarHero('bad')}>bad</Button>
      </GridItem>
    </Grid>
  );
};
