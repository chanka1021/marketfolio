import { BsViewList } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";

export const UserLinks = [
    { name: "My listings", link: "/listings", icon: <BsViewList /> },
    { name: "My orders", link: "/orders", icon: <FiShoppingCart /> },
    { name: "Settings", link: "/settings", icon: <IoIosSettings /> },
  ];