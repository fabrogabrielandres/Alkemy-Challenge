import * as React from 'react';
import {Alert, AlertIcon, AlertTitle, AlertDescription, Text} from '@chakra-ui/react';
import {Box} from '@chakra-ui/layout';
import {CloseButton} from '@chakra-ui/react';

export const AlertMessage = () => {
  return (
    <>
      <Box>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
          <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      </Box>
    </>
  );
};
