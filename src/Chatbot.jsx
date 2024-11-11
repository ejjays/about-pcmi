import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.innerHTML = `window.chtlConfig = { chatbotId: "8648675472" }`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://chatling.ai/js/embed.js";
    script2.async = true;
    script2.setAttribute('data-id', '8648675472');
    script2.id = 'chatling-embed-script';
    script2.type = 'text/javascript';
    document.body.appendChild(script2);
  }, []);

  return (
    <div></div>
  );
};

export default Chatbot;