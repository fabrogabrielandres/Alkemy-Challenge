import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Flex} from '@chakra-ui/layout';
import {BiMessageRoundedAdd} from 'react-icons/bi';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Hero} from '../interfaces/reqSearchInterface';

import {ModalTeam} from './ModalTeam';

interface Props {
  hero: Hero;
}

export const Card = ({hero}: Props) => {
  const {alignment} = hero.biography;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [showModal, setshowModal] = useState(false);

  return (
    <>
      <Flex border="solid" borderColor="red" direction="column" margin={'2%'} w={'30%'}>
        <Image alt="hero" boxSize="full" position="relative" src={hero.image.url} />
        <Flex flexDir="column" position="absolute">
          <Button
            backgroundColor="red"
            size="xs"
            textColor="white"
            onClick={() => setshowModal(!showModal)}
          >
            <BiMessageRoundedAdd />
          </Button>
        </Flex>
      </Flex>
      {showModal ? <ModalTeam hero={hero} /> : null}
    </>
  );
};
