import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Flex} from '@chakra-ui/layout';
import {BiMessageRoundedAdd, BiInfoCircle} from 'react-icons/bi';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Hero} from '../interfaces/reqSearchInterface';
import {addLogic} from '~/helpers/addLogic';
// import {addTeam} from '~/store/slices/heroes/HeroesSlice';

interface Props {
  hero: Hero;
}

export const Card = ({hero}: Props) => {
  let {alignment} = hero.biography;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <Flex border="solid" borderColor="red" direction="column" margin={'2%'} w={'30%'}>
      <Image alt="hero" boxSize="full" position="relative" src={hero.image.url} />
      <Flex flexDir="column" position="absolute">
        {alignment === 'neutral' ? (
          <>
            <Button
              backgroundColor="red"
              size="xs"
              textColor="white"
              onClick={() => addLogic(hero, (alignment = 'bad'), dispatch, state)}
            >
              <BiMessageRoundedAdd />
            </Button>
            <Button
              backgroundColor="blue"
              size="xs"
              textColor="white"
              onClick={() => addLogic(hero, (alignment = 'good'), dispatch, state)}
            >
              <BiInfoCircle />
            </Button>
          </>
        ) : alignment === 'good' ? (
          <>
            <Button
              backgroundColor="blue"
              size="xs"
              textColor="white"
              onClick={() => addLogic(hero, alignment, dispatch, state)}
            >
              <BiInfoCircle />
            </Button>
          </>
        ) : (
          <Button
            backgroundColor="red"
            size="xs"
            textColor="white"
            onClick={() => addLogic(hero, alignment, dispatch, state)}
          >
            <BiInfoCircle />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
