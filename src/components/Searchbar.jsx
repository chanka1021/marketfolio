import React, { useRef, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  useDisclosure,

} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { Categories } from "../data/categories";
import { FaTreeCity } from "react-icons/fa6";
import { Cities } from "./../data/cities";
import CategorySelectorDrawer from './Drawers/CategorySelectorDrawer';
import CitySelectorDrawer from './Drawers/CitySelectorDrawer';
import { useSearch } from "../context/FilterContext";

function Searchbar() {
  // State variables for selected category, filtered cities, and city selection modal
  const [filteredCities, setFilteredCities] = useState(Cities);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();
  // Refs for buttons to trigger modals
  const btnRef = useRef();
  const btnRef2 = useRef();
  const { selectedCategory, setSelectedCategory, selectedCity, setSelectedCity } = useSearch();

  // Function to handle category selection
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
    onClose();
  };


  // Function to handle city selection
  const handleCitySelection = (city) => {
      setSelectedCity(city);
      setFilteredCities(Cities)
      onClose2();
  };

  return (
    <div className="w-full shadow-md ">
      <div className="w-full xl:px-60 md:px-16 md:flex items-center gap-2 justify-between py-4">
        <div className="md:w-1/4 h-full md:px-2">
          <InputGroup>
            <Input
              borderLeftRadius={40}
              bg={"#FAFAFA"}
              type="item"
              placeholder="Looking for ?"
            />
          </InputGroup>
        </div>
        {/* Button for selecting category */}
        <div className="md:w-1/4 h-full py-2 md:py-0 MD:px-2">
          <Button
            onClick={onOpen}
            _hover={{ bg: "#24lorCC" }}
            rightIcon={<MdNavigateNext className="text-2xl" />}
            leftIcon={
              <div style={{ color: `${selectedCategory.color}` }} className="text-2xl">
                {selectedCategory.icon}
              </div>
            }
            justifyContent={"space-between"}
            color={"black"}
            width={"100%"}
          >
            {selectedCategory.name}
          </Button>
        </div>
        {/* Button for selecting city */}
        <div className="md:w-1/4 h-full  md:px-2">
          <Button
            onClick={onOpen2}
            justifyContent={"space-between"}
            w={"100%"}
            leftIcon={<FaTreeCity />}
            rightIcon={<MdNavigateNext className="text-2xl" />}
          >
            {selectedCity}
          </Button>
        </div>
        {/* Button for search action */}
        <div className="md:w-1/4 h-full md:px-2 max-sm:mt-5">
          <Button
            _hover={{ bg: "#24s4lorCC" }}
            leftIcon={<CiSearch className="text-2xl" />}
            color={"white"}
            borderRightRadius={40}
            width={"100%"}
            bg={"#2455CC"}
          >
            Search
          </Button>
        </div>
      </div>
      {/* Render modals */}
      <CategorySelectorDrawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} handleCategoryClick={handleCategoryClick} />
      <CitySelectorDrawer isOpen={isOpen2} onClose={onClose2} finalFocusRef={btnRef2} handleCitySelection={handleCitySelection} filteredCities={filteredCities} />
    </div>
  );
}

export default Searchbar;
