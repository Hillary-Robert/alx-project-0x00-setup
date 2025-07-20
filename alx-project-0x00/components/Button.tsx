
import React from 'react'
import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-white text-black ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
