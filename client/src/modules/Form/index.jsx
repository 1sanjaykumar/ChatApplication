import React, { useState } from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/button.js";
import Background from "../../components/image.jpg"
import { useNavigate } from "react-router-dom";
const Form = ({ 
  className = "", isSignInPage = false
 }) => {
  const [Data, setData] = useState({
    ...(!isSignInPage && {
      fullname: "",
    }),
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize:'cover'}}
  console.log(Data);
  return (
    <div className="w-screen h-screen flex items-center justify-center" style={{backgroundImage: `url(${Background})`,backgroundSize:'cover'}}>
    <div
      className={`${className} bg-[#0000006b] w-[400px] h-auto py-10 shadow-2xl rounded-md flex flex-col justify-center items-center`}
    >
      <div className="text-4xl font-bold text-white">
        Wellcome {isSignInPage && "Back"}
      </div>
      <div className="text-2xl font-light text-white mb-10">
        {isSignInPage
          ? "Sign in to get explore "
          : "Sign in now to get started"}
      </div>
      <form  className="w-full flex flex-col items-center content-center">
      {!isSignInPage && (
        <Input
          value={Data.fullname}
          label="Full Name"
          name="name"
          type="text"
          placeholder="Enter your Full name"
          className="rounded-md px-2"
          isRequired
          onChange={(e)=>setData({...Data,fullname:e.target.value})}
        />
      )}
      <Input
      isRequired
        value={Data.email}
        label="Email Address"
        name="Email"
        type="Email"
        placeholder="Enter your Email Address"
        className="rounded-md px-2"
        onChange={(e)=>setData({...Data,email:e.target.value})}
      />
      <Input
      isRequired
        value={Data.password}
        label="Password"
        name="Password"
        type="Password"
        placeholder="Enter your Password"
        className="rounded-md px-2"
        onChange={(e)=>setData({...Data,password:e.target.value})}
      />
      <Button
        label={isSignInPage ? "Sign in" : "Sign Up"}
        type="text"
        className="w-1/2  font-semibold text-lg text-white mt-12 bg-[#1a6aff] rounded-md px-2 "
      />
      </form>
      <div className="text-white mt-5 ">
        {isSignInPage ? "Did't have an account?" : "Already Have an account?"}{" "}
        <span onClick={()=>navigate(`/user/${isSignInPage ? 'sign_up':'sign_in'}`)} className="text-[#1a6aff] cursor-pointer underline hover:font-semibold">
          {isSignInPage ? "Sign up" : "Sign in"}
        </span>
      </div>
    </div>
    </div>
  );
};

export default Form;
