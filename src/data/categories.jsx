import { BiCategory } from "react-icons/bi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
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

export const Categories = [
  {
    name: "All Categories",
    icon: <BiCategory />,
    color : "#1d4dcb"
  },
  {
    name: "Electronics",
    icon : <HiOutlineComputerDesktop/>,
    color : "#f0464a",
    childerns : [
      {
        name: "Computers",
        icon : <LiaLaptopSolid/>
      },
      {
        name: "Phones & Tablets",
        icon : <FiSmartphone/>
      },
      {
        name: "Tv & Audio",
        icon : <PiTelevisionSimpleBold/>
      },
      {
        name: "Gaming & consols",
        icon : <BiJoystickButton/>
      },
      {
        name: "Photo & Video",
        icon : <BsCameraReels/>
      }
  ]
  },
  {
    name:"Home & Garden",
    color : "#1ad76a",
    icon : <GiSofa/>
  },
  {
    name:"Fashion",
    color : '#ffff77',
    icon : <GiClothes />,
    childerns:[
      {
        name: "Men",
        icon : <FaMale/>
      },
      {
        name: "Women",
        icon : <FaFemale/>
      },
      {
        name:"Jewerly & Watches",
        icon : <GiWatch/>
      },
      {
        name:"Shoes",
        icon : <GiSonicShoes/>
      }
    ]
  },
  {
    name:"Auto Parts",
    color : "#ff8000",
    icon : <GiGears/>,
    childerns : [
      {
        name: "Scooter Parts",
        icon : <MdElectricScooter/>
      },
      {
        name: "GPS & Radars",
        icon : <GiGps/>
      },
      {
        name: "Car Parts",
        icon : <GiCarSeat />
      }
    ]
  },
  {
    name:'Collectibles',
    color : '#800040',
    icon : <CgCardSpades/>
  }
];
