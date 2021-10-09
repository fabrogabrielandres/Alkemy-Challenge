import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Flex} from '@chakra-ui/layout';
import {BiMessageRoundedAdd, BiInfoCircle} from 'react-icons/bi';
import React from 'react';
import {useDispatch} from 'react-redux';

import {Hero} from '../interfaces/reqSearchInterface';
import {addTeam} from '~/store/slices/heroes/HeroesSlice';

interface Props {
  hero: Hero;
}

export const Card = ({hero}: Props) => {
  const dispatch = useDispatch();
  const {alignment} = hero.biography;

  return (
    <Flex border="solid" borderColor="red" direction="column" margin={'2%'} w={'30%'}>
      <Image alt="hero" boxSize="full" position="relative" src={hero.image.url} />
      <Flex flexDir="column" position="absolute">
        {alignment === 'neutral' ? (
          <>
            <Button backgroundColor="yellow" size="xs" textColor="white">
              <BiMessageRoundedAdd />
            </Button>
            <Button backgroundColor="yellow" size="xs" textColor="white">
              <BiInfoCircle />
            </Button>
          </>
        ) : alignment === 'good' ? (
          <>
            <Button backgroundColor="red" size="xs" textColor="white">
              <BiInfoCircle />
            </Button>
          </>
        ) : (
          <Button backgroundColor="blue" size="xs" textColor="white">
            <BiInfoCircle />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
