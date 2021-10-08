import {Stack, Text, Flex} from '@chakra-ui/layout';
import {Input} from '@chakra-ui/react';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {Card} from '~/component/Card';
import {Hero, ReqSearchInterface} from '~/interfaces/reqSearchInterface';
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
    const responce = await axios.get<ReqSearchInterface>(
      `https://superheroapi.com/api.php/10226316108633650/search/${query}`,
    );

    setFetchList(responce.data.results);
  };

  return (
    <>
      <video autoPlay loop muted className="videoSearch" src={video} />
      <Stack alignItems="center">
        <Stack>
          <Text fontSize={'5xl'} textColor="white">
            Search your Hero
          </Text>
          <Input placeContent="find a hero" onChange={handleInput} />
        </Stack>
      </Stack>

      <Flex flexDir="row" justifyContent="space-around" wrap="wrap">
        {fetchList.map((hero, idx) => (
          <Card key={idx} url={hero.image.url} />
        ))}
      </Flex>
    </>
  );
};
