import React from 'react';
import {Flex, HStack, Text} from '@chakra-ui/layout';
import {
  GiAncientSword,
  GiSwordsEmblem,
  GiBrain,
  GiSwordsPower,
  GiStripedSword,
  GiSwordSlice,
} from 'react-icons/gi';
import './card.css';

import {Hero} from '../interfaces/reqSearchInterface';
interface Props {
  hero: Hero;
}
export const HeroInfo = ({hero}: Props) => {
  const {combat, durability, intelligence, power, speed, strength} = hero.powerstats;

  return (
    <Flex alignItems="center" className="info" flexDir="column" justify="center">
      <HStack>
        <Text color="red">{`Name: ${hero.name}`}</Text>
      </HStack>

      <HStack>
        <GiAncientSword color={'red'} />
        <Text color="red">{`Combat: ${combat}`}</Text>
      </HStack>
      <HStack>
        <GiSwordsEmblem color={'red'} />
        <Text color="red">{`Durability: ${durability}`}</Text>
      </HStack>
      <HStack>
        <GiBrain color={'red'} />
        <Text color="red">{`Intelligence: ${intelligence}`}</Text>
      </HStack>
      <HStack>
        <GiSwordsPower color={'red'} />
        <Text color="red">{`Power: ${power}`}</Text>
      </HStack>
      <HStack>
        <GiStripedSword color={'red'} />
        <Text color="red">{`Speed: ${speed}`}</Text>
      </HStack>
      <HStack>
        <GiSwordSlice color={'red'} />
        <Text color="red">{`Strength: ${strength}`}</Text>
      </HStack>
    </Flex>
  );
};
