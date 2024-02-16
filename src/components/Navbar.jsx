import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdContacts } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

function Navbar() {
  let Links = [
    { name: "HOME", link: "/", icon: <CiHome /> },
    { name: "Contact", link: "/contact", icon: <IoMdContacts /> },
  ];

  let [open, setOpen] = useState(false);
  let [logged, setLogged] = useState(true);

  return (
    <div className="shadow-md w-full sticky top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex items-center justify-between">
        <div className="flex cursor-pointer items-center gap-2">
          <img src={logo} alt="logo" className="w-8" />
          <h3 className="text-2xl font-mono font-bold">MarketFolio</h3>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6  cursor-pointer h-7 w-7 md:hidden"
        >
          {open ? <IoMdClose /> : <FaBars />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 bg-[#F8F7F3] absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <div className="md:hidden mt-10">
            {logged ? (
              <div> logged</div>
            ) : (
              <span>
                <h4 className="text-3xl font-bold text-gray-800">Welcome to MarketFolio</h4>
                <h6 className="text-gray-800 text-xl">Your favorit merketplace in europ</h6>
                <div className="mt-5  w-fit m-auto flex flex-col gap-2">
                <button className="bg-blue-500 items-center  hover:bg-blue-700 flex justify-center text-white  py-2 px-4 rounded w-[350px]">
                  <a>
                    <IoMdContact className="mr-2" />
                  </a>
                  Login
                </button>
                <button className="items-center flex bg-red-400 text-white justify-center hover:bg-red-700   px-4 py-2 rounded w-[350px]">
                  <a>
                    <MdOutlineAddToPhotos className="mr-2" />
                  </a>
                  sell
                </button>
                </div>

              </span>
            )}
          </div>
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold flex items-center">
              <a className="md:hidden mr-2 text-2xl ">{link.icon}</a>
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <span className="hidden md:visible">

          
          <div className="md:ml-8 md:my-0 my-7 md:pl-10 ">
            {logged ? (
              <div> xx</div>
            ) : (
              <div className="cursor-pointer hover:font-semibold duration-300 trasition-all">
                {" "}
                <Link to="/login">Login</Link>
              </div>
            )}
          </div>
          <button className="btn w-fit items-center flex bg-blue-600 text-white md:ml-8  px-5 py-1 rounded duration-500 md:static">
            <a>
              <MdOutlineAddToPhotos className="mr-2" />
            </a>
            sell
          </button>
          </span>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
