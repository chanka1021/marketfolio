import React, { useState } from "react";
import {useSignup} from "../hooks/useSignup"

import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import { AiTwotoneMail } from "react-icons/ai";
import { PiPasswordDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import img from "../assets/illustration-2.png";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

function Signup() {
  const { signup, error, isPending } = useSignup();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [adressError, setAdressError] = useState("");

  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSignup =  async (e) => {
    e.preventDefault();
    // Validation
    let isValid = true;

    if (!/^[a-zA-Z]+$/.test(name)) {
      setNameError("Name should contain only letters.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

   /*  if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      isValid = false;
    } else {
      setPasswordError("");
    }

     if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      isValid = false;
     } */
     if (address.length === 0) {
      setAdressError("Address cannot be empty")
      isValid = false
     }

    if (isValid) {
      // Handle signup logic here
      await signup(name, email,password,address, phone );
      console.log(name, email, phone, password, address);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center  md:px-5 ">
      <div className="w-[90%]  md:flex items-center md:p-20 ">
        <div className="w-[50%] m-auto ">
          <img src={img} alt="" />
        </div>
        <div className="w-full md:pt-10 md:w-[50%] md:px-20">
          <h1 className="text-3xl font-bold">Sign up to MarketFolio</h1>
          <p className="text-gray-500 py-5">
            You can also sign up using your Facebook or Google account.
          </p>
          <div className="flex gap-5 md:gap-20 justify-center">
            <button className="p-2 rounded-lg px-10 border-2 flex items-center shadow-xl duration-300 hover:bg-Cyan hover:text-white">
              <FcGoogle className="mr-2" /> Google
            </button>
            <button className="p-2 rounded-lg px-10 border-2 flex items-center shadow-xl duration-300 hover:bg-Crimson hover:text-white">
              <RiFacebookFill className="mr-2 text-blue-700" /> Facebook
            </button>
          </div>
          <div className="w-full text-gray-500 border-b items-center text-center font-bold py-5">
            Or
          </div>
          <form>
            <div>
              <Text className="mt-4 py-1">Name</Text>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <Text className="text-red-500">{nameError}</Text>}
            </div>
            <div>
              <Text className="mt-4 py-1">Email</Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiTwotoneMail />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              {emailError && <Text className="text-red-500">{emailError}</Text>}
            </div>
            <div>
              <Text className="mt-4 py-1">Phone Number</Text>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <Text className="mt-4 py-1">Password</Text>
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
              {passwordError && (
                <Text className="text-red-500">{passwordError}</Text>
              )}
            </div>
            <div>
              <Text className="mt-4 py-1">Confirm Password</Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PiPasswordDuotone />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                
              </InputGroup>
              {confirmPasswordError && (
                <Text className="text-red-500">{confirmPasswordError}</Text>
              )}
            </div>
            <div>
              <Text className="mt-4 py-1">Address</Text>
              <Input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {adressError && (
                <Text className="text-red-500">{adressError}</Text>
              )}
            </div>
            <label className="flex items-center mt-4 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-red-500"
                checked={policyAccepted}
                onChange={(e) => setPolicyAccepted(e.target.checked)}
              />
              <span className="ml-2 text-gray-700">
                I accept the <Link to="/policy">privacy policy</Link>
              </span>
            </label>
            <button
              type="button"
              className="w-full bg-red-500 text-white p-2 rounded duration-300 hover:bg-[#833737] mt-6"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-2">
            Already have an account?{" "}
            <Link to="/login">
              <p className="text-red-500 cursor-pointer">Login here.</p>
            </Link>
            {error && <Text className="text-red-500">err :{error}</Text>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
