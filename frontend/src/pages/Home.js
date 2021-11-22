import React from 'react';
import { Featured, NewCollection, OurSortiment, Sale } from '../components';

const Home = () => {
  return (
    <>
      <Featured />
      <NewCollection />
      <Sale />
      <OurSortiment />
    </>
  );
};

export default Home;
