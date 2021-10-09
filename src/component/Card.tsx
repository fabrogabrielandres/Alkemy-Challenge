import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Flex} from '@chakra-ui/layout';
import {BiMessageRoundedAdd, BiInfoCircle} from 'react-icons/bi';
import React from 'react';

import {Hero} from '../interfaces/reqSearchInterface';

interface Props {
  hero: Hero;
}

export const Card = ({hero}: Props) => {
  return (
    <Flex border="solid" borderColor="red" direction="column" margin={'2%'} w={'30%'}>
      <Image alt="hero" boxSize="full" position="relative" src={hero.image.url} />

      <Flex flexDir="column" position="absolute">
        <Button backgroundColor="blue" size="xs" textColor="white">
          <BiMessageRoundedAdd />
        </Button>
        <Button backgroundColor="red" size="xs" textColor="white">
          <BiInfoCircle />
        </Button>
      </Flex>
    </Flex>
  );
};
