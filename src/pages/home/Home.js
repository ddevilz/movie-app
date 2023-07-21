import React from 'react';
// import Header from '../../components/header/Header';
import "./style.css";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from "./popular/Popular"


const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
    </div>
  )
}

export default Home
