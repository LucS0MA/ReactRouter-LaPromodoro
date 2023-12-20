import React, { useState } from 'react';

const ShadowButton = () => {
  const [text, setText] = useState('uiverse');

  const handleHover = () => {
    setText('Cliquez !!');
  };

  const handleMouseLeave = () => {
    setText('uiverse');
  };

  return (
    <button
      className="shadow__btn"
      onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
};

export default ShadowButton;
