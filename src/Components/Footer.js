import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="about">
          <h3 className="text-2xl font-bold mb-4">About ChannelConnectPro</h3>
          <p>ChannelConnectPro is your premier provider of internet and cable services. We deliver the best connectivity and entertainment solutions with unbeatable deals and exceptional customer support.</p>
        </div>
        <div className="links">
          <h3 className="text-2xl font-bold mb-4">Service Area</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Alabama, Alaska, Arizona, Arkansas</a></li>
            <li><a href="#" className="hover:underline">California, Colorado, Connecticut</a></li>
            <li><a href="#" className="hover:underline">Delaware, Florida, Georgia</a></li>
            <li><a href="#" className="hover:underline">Hawaii, Idaho, Illinois, Indiana</a></li>
            <li><a href="#" className="hover:underline">Iowa, Kansas, Kentucky, Louisiana</a></li>
            <li><a href="#" className="hover:underline">Massachusetts, Michigan</a></li>
            <li><a href="#" className="hover:underline">Maine, Maryland</a></li>
            <li><a href="#" className="hover:underline">Minnesota, Mississippi, Missouri, Montana</a></li>
            <li><a href="#" className="hover:underline">Nebraska, Nevada, New Hampshire, New Jersey</a></li>
            <li><a href="#" className="hover:underline">North Carolina, North Dakota, Ohio</a></li>
            <li><a href="#" className="hover:underline">New Mexico, New York</a></li>
            <li><a href="#" className="hover:underline">Rhode Island, South Carolina</a></li>
            <li><a href="#" className="hover:underline">Oklahoma, Oregon, Pennsylvania</a></li>
            <li><a href="#" className="hover:underline">South Dakota, Tennessee, Texas, Utah, Vermont, Virginia</a></li>
            <li><a href="#" className="hover:underline">Washington, West Virginia, Wisconsin, Wyoming</a></li>
          </ul>
        </div>
        <div className="contact">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:support@channelconnectpro.com" className="hover:underline">support@channelconnectpro.com</a></p>
          <p>Phone: <a href="tel:1-800-860-3891" className="hover:underline">1-800-860-3891</a></p>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2024 ChannelConnectPro. All rights reserved. <span className="font-semibold">@WebXArtist</span></p>
      </div>
    </footer>
  );
}

export default Footer;

