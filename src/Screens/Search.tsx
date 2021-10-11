import {Stack, Flex} from '@chakra-ui/layout';
import {Input, Icon} from '@chakra-ui/react';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BiSearchAlt2} from 'react-icons/bi';

import {Card} from '~/component/Card';
import {Hero} from '~/interfaces/reqSearchInterface';
import video from '../assets/home.mp4';
import './Search.css';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [fetchList, setFetchList] = useState<Hero[]>([]);

  const handleInput = (e: {target: {value: React.SetStateAction<string>}}) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query !== '') {
      search();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const search = async () => {
    const responce = await axios.get(
      `https://superheroapi.com/api.php/10226316108633650/search/${query}`,
    );

    if (responce.data.results) {
      setFetchList(responce.data.results);
    }
  };

  return (
    <>
      <video autoPlay loop muted className="videoSearch" src={video} />
      <Stack alignItems="center">
        <Stack alignItems="center" direction="row" marginTop={4}>
          <Input
            backgroundColor="transparent"
            color="white"
            placeContent="find a hero"
            variant="outline"
            onChange={handleInput}
          />
          <Icon as={BiSearchAlt2} color="white" />
        </Stack>
      </Stack>

      <Flex flexDir="row" justifyContent="space-around" wrap="wrap">
        {fetchList.map((hero, idx) => (
          <Card key={idx} hero={hero} />
        ))}
      </Flex>
    </>
  );
};
