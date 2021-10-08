import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Box, Flex} from '@chakra-ui/layout';
import React from 'react';

export const Card = ({url = ''}) => {
  return (
    <Flex border="solid" borderColor="red" direction="column" margin={'2%'} w={'30%'}>
      <Image alt="hero" boxSize="full" position="relative" src={url} />
      <Box position="absolute" w="20%">
        <Button backgroundColor="red" size="xs" textColor="white" w="50%">
          Add
        </Button>
      </Box>
    </Flex>
  );
};
