import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '+13479790618'; // Replace with your actual phone number
  const message = 'Hello, I would like to get more information about Your Internet & Cable Services!';

  return (
    <a
      href={`https://wa.me/${encodeURIComponent(phoneNumber)}?text=${encodeURIComponent(message)}`}
      className="fixed bottom-32 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/whatsapp.png" width={35} height={35} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
