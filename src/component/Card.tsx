import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Flex} from '@chakra-ui/layout';
import {BiMessageRoundedAdd, BiInfoCircle} from 'react-icons/bi';
import React from 'react';
import {useDispatch} from 'react-redux';

import {Hero} from '../interfaces/reqSearchInterface';
import {addLogic} from '~/helpers/addLogic';
// import {addTeam} from '~/store/slices/heroes/HeroesSlice';

interface Props {
  hero: Hero;
}

export const Card = ({hero}: Props) => {
  const {alignment} = hero.biography;
  const dispatch = useDispatch();

  return (
    <Flex border="solid" borderColor="red" direction="column" margin={'2%'} w={'30%'}>
      <Image alt="hero" boxSize="full" position="relative" src={hero.image.url} />
      <Flex flexDir="column" position="absolute">
        {alignment === 'neutral' ? (
          <>
            <Button backgroundColor="red" size="xs" textColor="white">
              <BiMessageRoundedAdd />
            </Button>
            <Button backgroundColor="blue" size="xs" textColor="white">
              <BiInfoCircle />
            </Button>
          </>
        ) : alignment === 'good' ? (
          <>
            <Button
              backgroundColor="red"
              size="xs"
              textColor="white"
              // onClick={() => dispatch(addTeam(hero))}
              onClick={() => addLogic(hero, alignment, dispatch)}
            >
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
