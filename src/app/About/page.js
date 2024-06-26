"use client";
import React from 'react';

const ReviewCard = ({ name, review }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="p-4 text-center min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold pb-4">About Us</h1>
      <h2 className="text-lg md:text-xl mb-8">Learn more about our mission, vision, and what our customers say about us</h2>

      {/* Image Section */}
      <div className="flex justify-center pt-8">
        <img src="/ab2.png" alt="About Hero" className="w-1/4 md:w-1/4 lg:w-1/4 rounded-lg shadow-lg object-cover" />
      </div>

      {/* About Us Section */}
      <div className="pt-8">
        <h2 className="text-3xl md:text-4xl text-cyan-600 font-bold tracking-wide">Our Mission</h2>
        <p className="text-lg md:text-xl pt-4 px-4 md:px-16">
          At ChannelConnectPRO, our mission is to provide high-speed satellite internet and Cable to every corner of the country, ensuring everyone can stay connected to what matters most, no matter where they live.
        </p>
      </div>

      {/* Vision Section */}
      <div className="pt-8">
        <h2 className="text-3xl md:text-4xl text-cyan-600 font-bold tracking-wide">Our Vision</h2>
        <p className="text-lg md:text-xl pt-4 px-4 md:px-16">
          We envision a world where everyone has access to reliable, high-speed internet and Cable, empowering people to achieve their goals and stay connected with the world around them.
        </p>
      </div>

      {/* Technological Advancements Section */}
      <div className="pt-8">
        <h2 className="text-3xl md:text-4xl text-cyan-600 font-bold tracking-wide">Technological Advancements</h2>
        <p className="text-lg md:text-xl pt-4 px-4 md:px-16">
          ChannelConnectPRO continues to lead in satellite internet and Cable technology. Our latest advancements have improved connectivity speeds and reliability, making us a trusted provider for rural and urban communities alike.
        </p>
      </div>

      {/* Customer Reviews Section */}
      <div className="pt-8">
        <h2 className="text-3xl md:text-4xl text-cyan-600 font-bold tracking-wide">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <ReviewCard 
            name="Alice Brown" 
            review="ChannelConnectPRO has completely changed the way I work from home. The internet and Cable speed is fantastic!" 
          />
          <ReviewCard 
            name="Mark Davis" 
            review="The cable TV service is excellent. We have access to so many channels and the quality is great." 
          />
          <ReviewCard 
            name="Susan Wilson" 
            review="I live in a rural area, and ChannelConnectPRO has been a lifesaver for staying connected with family and friends." 
          />
        </div>
      </div>
    </div>
  );
};

export default About;


1