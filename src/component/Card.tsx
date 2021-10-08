import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Box, Flex} from '@chakra-ui/layout';
import React from 'react';

export const Card = ({url = ''}) => {
  return (
    <Flex border="solid" borderColor="red" direction="column" margin={'2%'} w={'29%'}>
      <Image alt="hero" boxSize="full" position="relative" src={url} />
      <Box position="absolute">
        <Button backgroundColor="red" size="xs" textColor="white">
          Addddddddddddddddddddddddddd
        </Button>
      </Box>
    </Flex>
  );
};
