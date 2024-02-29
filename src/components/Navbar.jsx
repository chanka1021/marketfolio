import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdContacts } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import UserMenu from "./UserMenu";
import SellBtn from "./Buttons/SellBtn";

function Navbar() {
  let Links = [
    { name: "Home", link: "/", icon: <CiHome /> },
    { name: "Contact", link: "/contact", icon: <IoMdContacts /> },
  ];

 

  const { user } = useAuthContext();

  let [open, setOpen] = useState(false);
  let [logged, setLogged] = useState(!!user);

  useEffect(() => {
    setLogged(!!user);
  }, [user]);

  const { logout } = useLogout();
  const Signout = () => {
    logout();
  };

  return (
    <div className="shadow-md w-full relative top-0 left-0 ">
      <div className="md:px-60  py-4 px-7 md:flex items-center justify-between">
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute  md:static
         bg-white md:z-auto z-[-1] left-0 w-full md:w-auto  md:pl-0 pl-9 transition-all duration-500 ease-in
          ${open ? "top-12  z-[999]" : "top-[-490px]"}`}
        >
          <div className="md:hidden mt-10">
            {logged ? (
              <UserMenu mobile={true} />
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
                  <SellBtn/>
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
              <li>
                <a></a>
              </li>
            </Link>
          ))}
          <span className=" md:pl-10 md:flex hidden md:items-center ">
            <div className="md:ml-8 md:my-0 my-7  ">
              {logged ? (
                <div className="p2">
                  <UserMenu />
                </div>
              ) : (
                <div className="cursor-pointer hover:font-semibold duration-300 trasition-all">
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
