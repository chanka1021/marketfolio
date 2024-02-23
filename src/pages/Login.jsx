import React, { useState } from "react";
import img from "../assets/illustration-1.png";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { AiTwotoneMail } from "react-icons/ai";
import { PiPasswordDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLog = () => {
    console.log(email, password);
  };
  return (
    <>
      <div className=" w-full h-screen flex justify-center  md:px-5 py-0">
        <div className="w-[90%]  md:flex items-center md:mt-[-50px]">
          <div className="w-[50%] m-auto ">
            <img src={img} alt="" />
          </div>
          <div className="w-full md:w-[50%] md:px-20">
            <h1 className="text-3xl font-bold">Login to MarketFolio</h1>
            <p className="text-gray-500 py-5 ">
              You can use Quick Authentication with your Facebook or Gmail
              account
            </p>
            <span className="flex gap-5 md:gap-20 w-full  justify-center">
              <button className="p-2 rounded-lg px-10 border-2 flex items-center shadow-xl duration-300 hover:bg-Cyan hover:text-white ">
                <FcGoogle className="mr-2" /> Google
              </button>
              <button className="p-2 rounded-lg px-10 border-2 flex items-center shadow-xl duration-300 hover:bg-Crimson hover:text-white ">
                <RiFacebookFill className="mr-2 text-blue-700" /> Facebook
              </button>
            </span>
            <div className=" w-full text-gray-500 border-b items-center text-center font-bold py-5 ">
              Or
            </div>
            <span>
              <p className="text-gray-500 mt-3">Enter your email and password</p>
              <Text className=" mt-4 py-1 ">Email</Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiTwotoneMail />
                </InputLeftElement>
                <Input
                  type="Email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>

              <Text className=" mt-4 py-1 ">Password</Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PiPasswordDuotone />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              <div className=" hover:text-red-500 text-right cursor-pointer py-2 underline ">
                Forgot Password ?
              </div>
              <button
                className="w-full bg-red-500 text-white p-2 rounded duration-3  00 hover:bg-[#833737]"
                onClick={handleLog}
              >
                Login
              </button>
              <div className="text-center mt-2">
              Not registered?  <Link to="/register"> <p className="text-red-500 cursor-pointer">Register for free.</p> </Link>
              </div> 
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
