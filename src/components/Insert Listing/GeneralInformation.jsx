import { Box, Button, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import CategorySelectorDrawer from "./../Drawers/CategorySelectorDrawer";
import CitySelectorDrawer from "../Drawers/CitySelectorDrawer";
function GeneralInformation(props) {
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const handleCatClick = (cat) => {
    props.setCategory(cat);
    onClose();
  };
  const handleCityClick = (city) => {
    props.setCity(city);
    onClose2();
  };
  return (
    <div className="shadow-2xl border rounded-xl p-20 mt-10   flex flex-col space-y-4">
      <h2 className="text-lg font-semibold">What are you listing today?</h2>
      <p className="text-sm text-gray-600">
        This makes it easier for buyers to find what you want to sell.
      </p>
      <span className="mr-2">Category</span>
      <Button
        width="fit-content"
        rightIcon={<FaCaretDown />}
        leftIcon={
          <a style={{ color: `${props.category.color}` }}>
            {props.category.icon}
          </a>
        }
        onClick={onOpen}
      >
        {props.category.name}
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
        {props.city}
      </Button>
      <label className="text-sm">Address</label>
      <Input
        className="border border-gray-300 rounded px-2 py-1"
        placeholder="Enter your address"
        onChange={(e) => props.setAddress(e.target.value)}
        value={props.address}
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
}

export default GeneralInformation;
