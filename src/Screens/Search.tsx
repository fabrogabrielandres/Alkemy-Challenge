import {Stack, Flex} from '@chakra-ui/layout';
import {Input, Icon} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import {BiSearchAlt2} from 'react-icons/bi';
import {useDispatch, useSelector} from 'react-redux';

import {Card} from '~/component/Card';
import {Hero} from '~/interfaces/reqSearchInterface';
import {fechQuery} from '~/store/slices/heroes/HeroesSlice';
import video from '../assets/home.mp4';
import './Search.css';

export const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const {allHeroes} = useSelector((state) => state.HeroesSlice);
  const handleInput = (e: {target: {value: React.SetStateAction<string>}}) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query !== '') {
      search(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const search = async (query: string) => {
    dispatch(fechQuery(query));
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
        {allHeroes.map((hero: Hero, idx: string) => (
          <Card key={idx} hero={hero} />
        ))}
      </Flex>
    </>
  );
};
