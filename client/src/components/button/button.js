import React from "react"

const Button = ({
    label='',
    type='',
    className='',
    disabled=false,
}) => {
  return (
    <button className={`w-auto px-[117px] py-2 text-center ${className}`} type={type} required={disabled}>{label}</button>
  )
};

export default Button;





