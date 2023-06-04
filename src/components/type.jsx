import React, { useState, useEffect } from 'react';
import "../style/main.css" 

const Typewriter = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  const typingDelay = 100; // Adjust the delay between each character being typed
  const erasingDelay = 150; // Adjust the delay between each character being erased
  const pauseDuration = 1000

  useEffect(() => {
    let isDeleting = false;
    let currentIndex = 0;
    let timerId;

    const type = () => {
      if (!isDeleting && (currentIndex < fullText.length)) {
        
        setText((prevText) => fullText.substring(0, currentIndex));
        currentIndex++;

        timerId = setTimeout(type, typingDelay);

      } else if (isDeleting && currentIndex >= 0) {
        setText((prevText) => fullText.substring(0, currentIndex - 1));
        currentIndex--;

        if (currentIndex === 0) {
          isDeleting = false;
          timerId = setTimeout(type, typingDelay);
        } else {
          timerId = setTimeout(type, erasingDelay);
        }
      } else if (currentIndex === fullText.length) {
        isDeleting = true;
        timerId = setTimeout(type, pauseDuration);
      }
    };

    timerId = setTimeout(type, typingDelay);

    return () => clearTimeout(timerId);
  }, []);

  return (
     <div className="content">
  <h2 >
  {text}
  </h2>
  <h2 >
  {text}
  </h2>
  
  </div>)
};

export default Typewriter;
