'use client'
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Add Chatbase script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.setAttribute('chatbotId', 'zRy9unEpnRttA2v7z6AOK');
    script.setAttribute('domain', 'www.chatbase.co');
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Chatbase script will be added dynamically, so no need to render anything
};

export default Chatbot;