import React from 'react'
import Clients from './Clients';
import Customer from './Customer';
import Features from './Features';
import Hero from './Hero';
import OverView from './OverView';

const HomePage = () => {
  return (
    <div className="vlis-sections">
      <Hero />
      <Clients />
      <OverView />
      <Features />
      <Customer />
    </div>
  )
}
export default HomePage;
