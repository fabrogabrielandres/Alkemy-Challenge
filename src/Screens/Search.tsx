import {Box, Stack, Text} from '@chakra-ui/layout';
import {Input} from '@chakra-ui/react';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {ReqSearchInterface, Hero} from '../interfaces/reqSearchInterface';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [fetch, setFetch] = useState<Hero[]>([]);
  const handleInput = (e: {target: {value: React.SetStateAction<string>}}) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query !== '') {
      search();
    }
  }, [query]);

  const search = async () => {
    const responce = await axios.get<ReqSearchInterface>(
      `https://superheroapi.com/api.php/10226316108633650/search/${query}`,
    );

    console.log(responce.data.results);

    setFetch(responce.data.results);
  };

  return (
    <Stack align="center" justify="center">
      <Box>
        <Text textAlign="center">Search your Hero</Text>
        <Input margin={13} padding={13} placeContent="find a hero" onChange={handleInput} />
      </Box>
    </Stack>
  );
};
