import Stepper from "awesome-react-stepper";
import React from "react";
import { TbTextScan2 } from "react-icons/tb";
import { HiOutlinePencil } from "react-icons/hi2";
import { TbPhotoCheck } from "react-icons/tb";
import { TbFlagCheck } from "react-icons/tb";
import { Box, Button, Input, useDisclosure } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { Categories } from "./../data/categories";
import { useAuthContext } from "./../hooks/useAuthContext";
import  CitySelectorDrawer  from "../components/Drawers/CitySelectorDrawer";
import CategorySelectorDrawer from "../components/Drawers/CategorySelectorDrawer";

function Insert() {
  const { user } = useAuthContext();
  const [category, setCategory] = React.useState(Categories[0]);
  const [city, setCity] = React.useState("s");
  const [address, setAddress] = React.useState("");

  const {
    isOpen: isOpen,
    onOpen: onOpen,
    onClose: onClose,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const handleCatClick = (cat) => {
    setCategory(cat);
    onClose();
  };
  const handleCityClick = (city) => {
    setCity(city);
    onClose2();
  };
  const GeneralInformation = (
    <div className="shadow-2xl border rounded-xl p-20 mt-10   flex flex-col space-y-4">
      <h2 className="text-lg font-semibold">What are you listing today?</h2>
      <p className="text-sm text-gray-600">
        This makes it easier for buyers to find what you want to sell.
      </p>
      <span className="mr-2">Category</span>
      <Button
        width="fit-content"
        rightIcon={<FaCaretDown />}
        leftIcon={<a style={{ color: `${category.color}` }}>{category.icon}</a>}
        onClick={onOpen}
      >
        {category.name}
      </Button>

      <h2 className="text-lg font-semibold">Your address</h2>
      <p className="text-sm text-gray-600">Main listing address</p>
      <span className="mr-2 font-light text-sm ">City</span>
      <Button
        width="fit-content"
        rightIcon={<FaCaretDown />}
        leftIcon={<GiModernCity />}
        onClick={onOpen2}
      >
        {city}
      </Button>
      <label className="text-sm">Address</label>
      <Input
        className="border border-gray-300 rounded px-2 py-1"
        placeholder="Enter your address"
      />
      <CitySelectorDrawer
        isOpen={isOpen2}
        onClose={onClose2}
        handleCitySelection={handleCityClick}
      />
      <CategorySelectorDrawer
        isOpen={isOpen}
        onClose={onClose}
        handleCategoryClick={handleCatClick}
      />
    </div>
  );

  const steps = [
    {
      title: "General Information",
      description: "Fill in the general information for your listing",
      icon: <TbTextScan2 />,
      content: GeneralInformation,
    },
    {
      title: "Listing Details",
      description: "Add more details to your listing",
      icon: <HiOutlinePencil />,
      content: GeneralInformation,
    },
    {
      title: "Listing Photos",
      description: "Add good quality photos",
      icon: <TbPhotoCheck />,
      content: GeneralInformation,
    },
    {
      title: "Listing Publication",
      description: "Publish and boost your listing",
      icon: <TbFlagCheck />,
      content: GeneralInformation,
    },
  ];

  return (
    <div className="w-full xl:px-60 md:px-20 items-center text-lg gap-2 justify-between py-4 ">
      <Stepper>
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex justify-center pt-5 items-center font-[Poppins] text-lg">
              <a className="text-4xl px-4">{step.icon}</a>
              {step.title}
            </div>
            <span className="w-full">{step.content}</span>
          </div>
        ))}
      </Stepper>
    </div>
  );
}

export default Insert;
