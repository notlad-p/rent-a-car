import React from 'react';
import JumboHeader from './components/JumboHeader';
import PopularVehicles from './components/PopularVehicles';
import MemberOffers from './components/MemberOffers';
import PopularLocations from './components/PopularLocations';

export default function Home() {
  return (
    <>
      <JumboHeader/>
      <PopularVehicles/>
      <MemberOffers/>
      <PopularLocations/>
    </>
  )
}