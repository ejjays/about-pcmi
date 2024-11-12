import React, { useEffect } from 'react';

const ChatWidget: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://chat.ordemio.com/lib/w.js';
        script.async = true;
        script.setAttribute('assistant-id', '911ffbde-f03f-45a8-91e7-1a865c2d8b9d');
        document.body.appendChild(script);
    }, []);

    return null;
};

export default ChatWidget;