{ /* import React, { useEffect } from 'react';

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

*/}

{/*

import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Script 1 to initialize tarsSettings
    const script1 = document.createElement('script');
    script1.innerHTML = `
      window.tarsSettings = {
        "convid": "hshvwG",
        "href": "https://chatbot.hellotars.com/conv/hshvwG"
      };
    `;
    document.head.appendChild(script1);

    // Script 2 to load the Tars widget
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://tars-file-upload.s3.amazonaws.com/bulb/js/widget.js';
    script2.id = 'tars-widget-script';
    script2.async = true;
    document.body.appendChild(script2);
  }, []);

  return (
    <div></div>
  );
};

export default Chatbot;

*/}


import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://www.chatbase.co/embed.min.js";
    script1.async = true;
    script1.setAttribute('chatbotId', 'oDRYtXaPH8rlwzx7wW0P_');
    script1.setAttribute('domain', 'www.chatbase.co');
    script1.defer = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "oDRYtXaPH8rlwzx7wW0P_",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(script2);
  }, []);

  return (
    <div></div>
  );
};

export default Chatbot;
