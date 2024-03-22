import React, { useState } from "react";
import img from "../assets/illustration-1.png";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import { useLogin } from "../hooks/useLogin";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { AiTwotoneMail } from "react-icons/ai";
import { PiPasswordDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

  const handleLog = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center md:px-5 py-0">
        <div className="w-[90%] md:flex items-center md:mt-[-50px]">
          <div className="w-[50%] m-auto ">
            <img src={img} alt="" />
          </div>
          <div className="w-full md:w-[50%] md:px-20">
            <h1 className="text-3xl font-bold">Login to MarketFolio</h1>
            <form onSubmit={handleLog}>
              <span>
                <p className="text-gray-500 mt-3">
                  Enter your email and password
                </p>
                <FormControl id="email" className="mt-4">
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <AiTwotoneMail />
                    </InputLeftElement>
                    <Input
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl id="password" className="mt-4">
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <PiPasswordDuotone />
                    </InputLeftElement>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <div className="hover:text-red-500 text-right cursor-pointer py-2 underline">
                  Forgot Password ?
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-500 text-white p-2 rounded duration-300 hover:bg-[#833737] mt-4"
                  disabled={isPending}
                >
                  {isPending ? "Logging in..." : "Login"}
                </Button>
                {error && <div className="text-red-500">{error}</div>}
                <div className="text-center mt-2">
                  Not registered?{" "}
                  <Link to="/register">
                    <p className="text-red-500 cursor-pointer">
                      Register for free.
                    </p>
                  </Link>
                </div>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
