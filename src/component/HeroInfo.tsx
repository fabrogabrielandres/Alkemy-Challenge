import React from 'react';
import {Flex, Text} from '@chakra-ui/layout';
import {
  GiAncientSword,
  GiSwordsEmblem,
  GiBrain,
  GiSwordsPower,
  GiStripedSword,
  GiSwordSlice,
} from 'react-icons/gi';

import {Hero} from '../interfaces/reqSearchInterface';
interface Props {
  hero: Hero;
}
export const HeroInfo = ({hero}: Props) => {
  const {combat, durability, intelligence, power, speed, strength} = hero.powerstats;

  return (
    <Flex alignItems="center" flexDir="column">
      <Flex>
        <Text>{`Name: ${hero.name}`}</Text>
      </Flex>

      <Flex>
        <GiAncientSword color={'red'} />
        <Text color="red">{`Combat: ${combat}`}</Text>
      </Flex>
      <Flex>
        <GiSwordsEmblem color={'red'} />
        <Text color="red">{`Durability: ${durability}`}</Text>
      </Flex>
      <Flex>
        <GiBrain color={'red'} />
        <Text color="red">{`Intelligence: ${intelligence}`}</Text>
      </Flex>
      <Flex>
        <GiSwordsPower color={'red'} />
        <Text color="red">{`Power: ${power}`}</Text>
      </Flex>
      <Flex>
        <GiStripedSword color={'red'} />
        <Text color="red">{`Speed: ${speed}`}</Text>
      </Flex>
      <Flex>
        <GiSwordSlice color={'red'} />
        <Text color="red">{`Strength: ${strength}`}</Text>
      </Flex>
    </Flex>
  );
};
