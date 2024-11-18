/* 

import React, { useEffect } from 'react';

const TarsChatScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'tars-widget-script';
    script.type = 'text/javascript';
    script.src = 'https://tars-file-upload.s3.amazonaws.com/bulb/js/widget.js';
    document.body.appendChild(script);

    window.tarsSettings = {
      convid: 'hshvwG',
      href: 'https://chatbot.hellotars.com/conv/hshvwG',
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TarsChatScript;

*/