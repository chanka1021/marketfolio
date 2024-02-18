import React, { useState } from "react";
import logo from "../assets/logo.png";
import Userpic from "../assets/avatar.svg";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdContacts } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { BsViewList } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  let Links = [
    { name: "Home", link: "/", icon: <CiHome /> },
    { name: "Contact", link: "/contact", icon: <IoMdContacts /> },
  ];
  let UserLinks = [
    { name: "My listings", link: "/listings", icon: <BsViewList /> },
    { name: "My orders", link: "/orders", icon: <FiShoppingCart /> },
    { name: "Settings", link: "/settings", icon: <IoIosSettings /> },
  ];
  let SellBtn = (
    <>
      <button className="items-center flex bg-red-400 text-white justify-center hover:bg-red-700   px-4 py-2 rounded w-full">
        <a>
          <MdOutlineAddToPhotos className="mr-2" />
        </a>
        sell
      </button>
    </>
  );
  let [open, setOpen] = useState(false);
  let [logged, setLogged] = useState(false);

  const UserInfo = (
    <>
      <div className="flex items-center w-full">
        <img src={Userpic} className=" shadow-lg rounded-full" />
        <div className="ml-5 text-gray-900">
          <p className="text-lg">Hello 👋,</p>
          <h4 className="text-xl">John doe</h4>
        </div>
      </div>
    </>
  );
  const UserSettings = (
    <>
      <ul className="flex flex-col gap-1 w-full mt-4 pr-9 font-light">
        {UserLinks.map((link) => (
          <li key={link.name} className="flex items-center justify-between p-1">
            <div className="flex items-center text-lg text-gray-800 hover:text-cyan-400 ">
              {link.icon} <a className="ml-3">{link.name}</a>
            </div>
            <MdNavigateNext />
          </li>
        ))}
        {SellBtn}
      </ul>
    </>
  );
  const UserMenu = (
    <>
      <Menu>
        <MenuButton
          bg={"#FF4C59"}
          borderRadius={40}
          fontWeight={"light"}
          color={"white"}
          _expanded={{ bg: "#FF4C59" }}
          as={Button}
          rightIcon={<MdNavigateNext />}
        >
          <div className="flex items-center">
            <div className="px-2">
              <FaUserCircle />
            </div>
            Achraf Chouach
          </div>
        </MenuButton>
        <MenuList>
          {UserLinks.map((link) => (
            <Link to={link.link} key={link.name}>
              <MenuItem>{link.name}</MenuItem>
            </Link>
          ))}
          <MenuDivider />
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );

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
          className={`md:flex md:items-center md:pb-0 pb-12 bg-[#F8F7F3] md:bg-transparent absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <div className="md:hidden mt-10">
            {logged ? (
              <div>
                {" "}
                {UserInfo} {UserSettings}
              </div>
            ) : (
              <span>
                <h4 className="text-3xl font-bold text-gray-800">
                  Welcome to MarketFolio
                </h4>
                <h6 className="text-gray-800 text-xl">
                  Your favorit merketplace in europ
                </h6>
                <div className="mt-5  w-full m-auto pr-9 flex flex-col gap-2">
                  <button className="bg-blue-500 items-center  hover:bg-blue-700 flex justify-center text-white  py-2 px-4 rounded w-full">
                    <a>
                      <IoMdContact className="mr-2" />
                    </a>
                    Login
                  </button>
                  {SellBtn}
                </div>
              </span>
            )}
          </div>
          {Links.map((link) => (
            <Link to={link.link} key={link.name}>
              <li className="md:ml-8 md:my-0 my-7 font-semibold flex items-center">
                <a className="md:hidden mr-2 text-2xl ">{link.icon}</a>
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            </Link>
          ))}
          <span className=" md:pl-10 md:flex hidden md:items-center ">
            <div className="md:ml-8 md:my-0 my-7  ">
              {logged ? (
                <div className="p2"> {UserMenu}</div>
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
