import React, { useState } from 'react';

const ButtonWhite = ({
  label,
  onClick,
  backgroundColorBeforeHover,
  backgroundColorAfterHover,
  textColorBeforeHover,
  textColorAfterHover,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    color: isHovered ? textColorAfterHover :textColorBeforeHover, 
    backgroundColor: isHovered ? backgroundColorAfterHover : backgroundColorBeforeHover,
  };

  return (
    <button
      className={`white-button-class mt-3`}
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
};

export default ButtonWhite;
