import React, { useRef } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Input,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useSearch } from "../../context/FilterContext";
import { FaTreeCity } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import CategorySelectorDrawer from "./CategorySelectorDrawer";
import CitySelectorDrawer from "./CitySelectorDrawer";
import { Cities } from "../../data/cities";
import { VscPackage } from "react-icons/vsc";

function PriceDrawer({ isOpen, onClose }) {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedCity,
    setSelectedCity,
  } = useSearch();

  const handleCategoryClick = (category, child) => {
    const newCategory = child
      ? {
          name: child.name,
          icon: child.icon,
          color: category.color,
        }
      : {
          name: category.name,
          icon: category.icon,
          color: category.color,
        };
    setSelectedCategory({ ...selectedCategory, ...newCategory });
    onClose2();
  };
  const handleCityClick = (city) => {
    setSelectedCity(city);
    onClose3();
  };
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Filter your search
          </DrawerHeader>
          <DrawerBody>
            {/* Category */}
            <div className="w-full mt-10"></div>
            <a className="text-base text-gray-500 font-[poppins]">
              Category
            </a>
            <Button
            marginTop={"10px"}
              bg={"#F3F3F3"}
              padding={"30px 40px"}
              justifyContent={" space-between"}
              w={"100%"}
              onClick={() => onOpen2()}
              rightIcon={<FaAngleRight />}
              leftIcon={
                <a
                  style={{ color: `${selectedCategory.color}` }}
                  className="text-xl pr-2"
                >
                  {selectedCategory.icon}
                </a>
              }
              key={selectedCategory.id}
            >
              {selectedCategory.name}
            </Button>
            <div className="w-full mt-5"></div>

            {/* City */}
            <a className="text-base text-gray-500 font-[poppins] ">City</a>
            <Button
            marginTop={"10px"}

              bg={"#F3F3F3"}
              padding={"30px 40px"}
              justifyContent={" space-between"}
              w={"100%"}
              onClick={() => onOpen3()}
              rightIcon={<FaAngleRight />}
              leftIcon={
                <a className="text-xl pr-2 text-black">
                  <FaTreeCity />
                </a>
              }
              key={selectedCity}
            >
              {selectedCity}
            </Button>
            {/* Price Range */}
            <div className="w-full mt-5"></div>

            <a className="text-base text-gray-500 font-[poppins] ">
              Price Range
            </a>

            <div className="flex flex-row gap-4 items-center mt-5">
              <Input type="number" placeholder="min" />
              {" - "}
              <Input type="number" placeholder="max" /> €
            </div>
          </DrawerBody>
          {/* Search Button */}
          <DrawerFooter>
            <Button colorScheme="blue"
             onClick={() => onClose()}
             leftIcon={<VscPackage className="text-4xl text-Crimson px-2" />}
            > View listings</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <CategorySelectorDrawer
        isOpen={isOpen2}
        onClose={onClose2}
        handleCategoryClick={handleCategoryClick}
      />
      <CitySelectorDrawer
        isOpen={isOpen3}
        onClose={onClose3}
        handleCitySelection={handleCityClick}
      />
    </>
  );
}

export default PriceDrawer;
