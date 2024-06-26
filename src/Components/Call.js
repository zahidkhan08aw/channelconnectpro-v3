import React from 'react';

const CallUsButton = () => {
  return (
    <a href="tel:+18008603891" className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600">
      <img src="/call1.png" alt="Call Us" className="w-7 h-7" />
    </a>
  );
};

export default CallUsButton;
