import { BsViewList } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { BsFillBagHeartFill } from "react-icons/bs";

export const UserLinks = [
    { name: "My listings", link: "/account/listings", icon: <BsViewList /> },
    { name: "My favourites", link: "/account/fav", icon: <BsFillBagHeartFill /> },
    { name: "Settings", link: "/account/settings", icon: <IoIosSettings /> },
  ];