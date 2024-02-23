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

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center md:p-10">
        <div className="w-[90%] h-fullshadow-lg flex">
          <div className="w-[50%]">
            <img src={img} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Login to MarketFolio</h1>
            <p className="text-gray-500">
              You can use Quick Authentication with your Facebook or Gmail
              account
            </p>
            <span className="flex gap-4">
              <Button className=" p-2 rounded flex items-center shadow-md ">
                {" "}
                <FcGoogle className="mr-2" /> Google
              </Button>
              <Button className=" p-2 rounded flex items-center shadow-md">
                {" "}
                <RiFacebookFill className="mr-2 text-blue-700" /> Facebook{" "}
              </Button>
            </span>
            <div className=" w-full text-gray-500 border-b items-center text-center font-bold ">
              Or
            </div>
            <span>
              <p>Enter your email and password</p>
              <Text className="text-red-500">Email</Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiTwotoneMail />
                </InputLeftElement>
                <Input type="Email" placeholder="E-mail" />
              </InputGroup>

              <Text className="text-red-500">Password</Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PiPasswordDuotone />
                </InputLeftElement>
                <Input type="password" placeholder="Password" />
              </InputGroup>
              <Button className="w-full bg-red-500 text-white p-2 rounded">
                Login
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
