import {Stack, Text} from '@chakra-ui/layout';
import {Input} from '@chakra-ui/react';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [fetch, setFetch] = useState([]);
  const handleInput = (e: {target: {value: React.SetStateAction<string>}}) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query !== '') {
      search();
    }
  }, [query]);

  const search = async () => {
    const responce = await axios.get(
      `https://superheroapi.com/api.php/10226316108633650/search/${query}`,
    );

    setFetch(responce.data.results);

    console.log(responce.data.results);
  };

  return (
    <Stack>
      <Input placeContent="find a hero" onChange={handleInput} />
      <Text>Search your Hero</Text>
      <Text>{query}</Text>
    </Stack>
  );
};
