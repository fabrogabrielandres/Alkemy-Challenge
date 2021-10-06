import React from 'react';
import './login.css';

import video from '../assets/home.mp4';

import {Search} from './Search';

export const Home = () => {
  return (
    <div>
      <video autoPlay loop muted className="video" src={video} />
      <Search />
    </div>
  );
};
