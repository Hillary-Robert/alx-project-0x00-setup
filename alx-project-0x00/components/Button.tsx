import { div } from "framer-motion/client";
import {ButtonProps} from "../interfaces"
import React from 'react'


const sizeStyles = {
  small: "text-sm py-1 px-3",
  medium: "text-base py-2 px-4",
  large: "text-lg py-3 px-6",
};




const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  rounded = "rounded-md",
  className = '',
  styles = '',
}) => {
  const sizeClass = sizeStyles[size] || sizeStyles.medium;

  return (
    <button
      className={`bg-white text-black ${sizeClass} ${rounded} ${className} ${styles}`}
    >
      {title}
    </button>
  );
};




export default Button;