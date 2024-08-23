import React from "react"

const Input = ({
   label='',
   name='',
   type='text',
   className='',
   isRequired=false,
   placeholder='',
   value='',
   onChange=()=>{},
}) => {
  return (
    <div className="w-full flex flex-col px-[50px] py-0 my-2">
    <label for={name} className="text-white text-lg">{label}</label>
    <input type={type} id={name} required={isRequired} value={value} onChange={onChange} className={`w-full py-2 border-2 border-slate ${className}`} placeholder={placeholder} ></input>
    </div>   
  )
};

export default Input;
