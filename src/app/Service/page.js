"use client"
// pages/Service/page.js

import React from 'react';
import Card from "../../Components/Card";
import { faWifi, faTv, faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <div className="p-4 text-center min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold pb-4">Our Services</h1>
      <h2 className="text-lg md:text-xl mb-8">We provide the best services for you</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card 
          icon={faWifi} 
          content={<p>High-speed Internet</p>} 
          price={74.99}
          discount={10.00}
        />
        <Card 
          icon={faTv} 
          content={<p>Cable TV</p>} 
          price={121.99}
          discount={10.00}
        />
        <Card 
          icon={faSatelliteDish} 
          content={<p>Satellite TV</p>} 
          price={64.99}
          discount={5.00}
        />
      </div>

      <section className="bg-cyan-600 w-full h-48 text-white flex items-center justify-center">
  <div className="text-center text-3xl md:text-5xl lg:text-6xl">
    Receive a $200 Visa gift card after installation.
  </div>
</section>

      <section className="mt-8 bg-gray-100 p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us?</h3>
        <p className="text-lg md:text-xl mb-4">With our unbeatable offers and excellent customer service, we ensure you get the best value for your money. Enjoy seamless connectivity and entertainment with our high-speed internet and cable TV services.</p>
        <p className="text-lg md:text-xl">Sign up today and take advantage of our special deals, including a $200 Visa gift card after installation.</p>
      </section>
    </div>
  );
};

export default Service;





