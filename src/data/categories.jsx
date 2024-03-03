import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import { LiaLaptopSolid } from "react-icons/lia";
import { FiSmartphone } from "react-icons/fi";
import { BiJoystickButton } from "react-icons/bi";
import { BsCameraReels } from "react-icons/bs";
import { GiSofa } from "react-icons/gi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { GiWatch } from "react-icons/gi";
import { GiSonicShoes } from "react-icons/gi";
import { GiGears } from "react-icons/gi";
import { MdElectricScooter } from "react-icons/md";
import { GiGps } from "react-icons/gi";
import { GiCarSeat } from "react-icons/gi";
import { CgCardSpades } from "react-icons/cg";
import { MdPets } from "react-icons/md";
import { LuCat, LuDog } from "react-icons/lu";
import { MdSportsVolleyball } from "react-icons/md";

export const Categories = [
  {
    id: "1",
    name: "All Categories",
    icon: <BiCategory />,
    color: "#1d4dcb"
  },
  {
    id: "2",
    name: "Electronics",
    icon: <HiOutlineComputerDesktop />,
    color: "#f0464a",
    childrens: [
      {
        id: "2.1",
        name: "Computers",
        icon: <LiaLaptopSolid />
      },
      {
        id: "2.2",
        name: "Phones & Tablets",
        icon: <FiSmartphone />
      },
      {
        id: "2.3",
        name: "Tv & Audio",
        icon: <PiTelevisionSimpleBold />
      },
      {
        id: "2.4",
        name: "Gaming & consols",
        icon: <BiJoystickButton />
      },
      {
        id: "2.5",
        name: "Photo & Video",
        icon: <BsCameraReels />
      }
    ]
  },
  {
    id: "3",
    name: "Home & Garden",
    color: "#1ad76a",
    icon: <GiSofa />
  },
  {
    id: "4",
    name: "Fashion",
    color: "#ffff77",
    icon: <GiClothes />,
    childrens: [
      {
        id: "4.1",
        name: "Men",
        icon: <FaMale />
      },
      {
        id: "4.2",
        name: "Women",
        icon: <FaFemale />
      },
      {
        id: "4.3",
        name: "Jewelry & Watches",
        icon: <GiWatch />
      },
      {
        id: "4.4",
        name: "Shoes",
        icon: <GiSonicShoes />
      }
    ]
  },
  {
    id: "5",
    name: "Auto Parts",
    color: "#ff8000",
    icon: <GiGears />,
    childrens: [
      {
        id: "5.1",
        name: "Scooter Parts",
        icon: <MdElectricScooter />
      },
      {
        id: "5.2",
        name: "GPS & Radars",
        icon: <GiGps />
      },
      {
        id: "5.3",
        name: "Car Parts",
        icon: <GiCarSeat />
      }
    ]
  },
  {
    id: "6",
    name: "Collectibles",
    color: "#800040",
    icon: <CgCardSpades />
  },
  {
    id: "7",
    name: "Pet Supplies",
    color: "#804000",
    icon: <MdPets />,
    childrens: [
      {
        id: "7.1",
        name: "Dog",
        icon: <LuDog />
      },
      {
        id: "7.2",
        name: "Cat",
        icon: <LuCat />
      }
    ]
  },
  {
    id: "8",
    name: "Sports & Fitness",
    color: "#408080",
    icon: <MdSportsVolleyball />
  }
];
