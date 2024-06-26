// components/Card.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ icon, content, price, discount }) => {
  const discountedPrice = price - discount;

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center">
      <FontAwesomeIcon icon={icon} size="3x" className="text-cyan-600 mb-4" />
      {content}
      {price && (
        <div className="mt-4">
          <p className="text-lg text-gray-700">Starting at just ${price.toFixed(2)}/-</p>
          <p className="text-lg text-gray-700 line-through">${price.toFixed(2)}/month</p>
          <p className="text-lg text-cyan-600">${discountedPrice.toFixed(2)}/month with AutoPay</p>
        </div>
      )}
    </div>
  );
};

export default Card;

