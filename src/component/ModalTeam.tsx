import {Button} from '@chakra-ui/button';
import React, {useState} from 'react';
import Modal from 'react-modal';
import {Stack} from '@chakra-ui/layout';

import {Hero} from '../interfaces/reqSearchInterface';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ModalTeam = (showModal: any, hero: Hero) => {
  const subtitle = 'ddd';
  const [modalIsOpen, setIsOpen] = useState(showModal);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Stack>
      <Modal
        contentLabel="Example Modal"
        isOpen={modalIsOpen}
        style={customStyles}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <Button onClick={closeModal}>close</Button>
        <Stack>I am a modal</Stack>
      </Modal>
    </Stack>
  );
};
