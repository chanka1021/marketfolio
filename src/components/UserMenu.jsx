import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Toast,
} from "@chakra-ui/react";
import { useLogout } from "../hooks/useLogout";
import { MdNavigateNext } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { UserLinks } from "../data/userLinks";
import { Link } from "react-router-dom";
import Userpic from "../assets/avatar.svg";
import SellBtn from "./Buttons/SellBtn";
import { useAuthContext } from "../hooks/useAuthContext";
import { VscSignOut } from "react-icons/vsc";

function UserMenu(props) {

  const { user } = useAuthContext();

  const { logout } = useLogout();
  const Signout = () => {
    logout();
  }; 
  if (!user) {
    return null;
  }

  if (props.mobile) {
    return (
      <>
        <div className="flex items-center w-full">
          <img src={Userpic} className=" shadow-lg rounded-full" />
          <div className="ml-5 text-gray-900">
            <p className="text-lg">Hello 👋,</p>
            <h4 className="text-xl">{user.name}</h4>
          </div>
        </div>
        <ul className="flex flex-col gap-1 w-full mt-4 pr-9 font-light">
          {UserLinks.map((link) => (
            <Link key={link.name} to={link.link}>
            <li
              onClick={props.closeMenu}
              key={link.name}
              className="flex items-center justify-between p-1"
            >
              <div className="flex items-center text-lg text-gray-800 hover:text-cyan-400 ">
                {link.icon} <a className="ml-3">{link.name}</a>
              </div>
              <MdNavigateNext />
            </li>
            </Link>
          ))}
          <button onClick={Signout}>
          <li className="flex items-center justify-between p-1">
            <div className="flex items-center text-lg  text-gray-600 hover:text-cyan-400 ">
              <VscSignOut />
              <a className="ml-3">Sign out</a>
            </div>
          </li></button>
          <Link onClick={props.closeMenu} to="/insert">
          <SellBtn />
          </Link>
        </ul>
      </>
    );
  }

  return (
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
          {user.name}
        </div>
      </MenuButton>
      <MenuList>
        {UserLinks.map((link) => (
          <Link to={link.link} key={link.name}>
            <MenuItem>{link.name}</MenuItem>
          </Link>
        ))}
        <MenuDivider />
        <MenuItem onClick={Signout}>Sign out</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserMenu;
