import React from 'react';
import "./style.css"

const ButtonPurple = ({ label, onClick }) => {


  return (
    <button
      className={`purple-button-class`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonPurple;
