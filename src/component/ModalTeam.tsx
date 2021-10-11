import React from 'react';

import {Hero} from '~/interfaces/reqSearchInterface';
interface Props {
  hero: Hero;
}
export const ModalTeam = ({hero}: Props) => {
  console.log(hero);

  return <div>{hero.image.url}</div>;
};
