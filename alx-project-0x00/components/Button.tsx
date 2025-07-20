import { div } from "framer-motion/client";
import {ButtonProps} from "../interfaces"
import React from 'react'


const sizeStyles = {
  small: "text-sm py-1 px-3",
  medium: "text-base py-2 px-4",
  large: "text-lg py-3 px-6",
};




const Button: React.FC<ButtonProps> =({
  title,
  size = "medium",
  shape = "rounded-md",
  className ='',
})=>{
  const sizeClass = sizeStyles[size] || sizeStyles.medium;

  return (
    <div>
      <button className="bg-white text-black p-2">{sizeClass}</button>
    </div>
  )

}


export default Button;