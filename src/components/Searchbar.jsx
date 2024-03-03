import React, { useRef, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { Categories } from "../data/categories";
import { FaTreeCity } from "react-icons/fa6";
import { Cities } from "./../data/cities";

function Searchbar() {
  // State variables for selected category, filtered cities, and city selection modal
  const [selectedCategory, setSelectedCategory] = useState(Categories[0]);
  const [filteredCities, setFilteredCities] = useState(Cities);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();
  const [selectedCity, setSelectedCity] = useState("ALL");
  // Refs for buttons to trigger modals
  const btnRef = useRef();
  const btnRef2 = useRef();

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

  // JSX for category selection modal
  const categorySelector = (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size={"sm"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth={1}>Select a category</DrawerHeader>
        <DrawerBody>
          {Categories.map((category) =>
            category.childrens ? (
              <Accordion allowToggle key={category.id}>
                <AccordionItem>
                  <h2>
                    <AccordionButton w={"100%"} justifyContent={"start"}>
                      <div className="flex items-center gap-2 font-semibold">
                        <a style={{ color: `${category.color}` }} className="text-xl pr-2 ">
                          {category.icon}
                        </a>
                        {category.name}
                      </div>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {category.childrens.map((child) => (
                      <Button
                        bg={"white"}
                        padding={"10px 20px"}
                        justifyContent={"start"}
                        w={"100%"}
                        onClick={() => handleCategoryClick(category, child)}
                        leftIcon={
                          <a style={{ color: `${category.color}` }} className="text-xl pr-2">
                            {child.icon}
                          </a>
                        }
                        key={child.id}
                      >
                        {child.name}
                      </Button>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ) : (
              <Button
                w={"100%"}
                justifyContent={"start"}
                bg={"white"}
                onClick={() => handleCategoryClick(category)}
                leftIcon={
                  <a style={{ color: `${category.color}` }} className="text-xl pr-2">
                    {category.icon}
                  </a>
                }
                key={category.id}
              >
                {category.name}
              </Button>
            )
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  // JSX for city selection modal
  const citySelector = (
    <Drawer
      isOpen={isOpen2}
      placement="right"
      onClose={onClose2}
      finalFocusRef={btnRef2}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Select City</DrawerHeader>

        <DrawerBody>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiSearch />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Search City"
              borderRadius={40}
              onChange={(e) => {
                const searchValue = e.target.value.toLowerCase();
                const filteredCities = Cities.filter((city) =>
                  city.toLowerCase().startsWith(searchValue)
                );
                setFilteredCities(filteredCities);
              }}
            />
          </InputGroup>
          {filteredCities.map((city) => (
            <Button
              onClick={() => handleCitySelection(city)}
              py={"5px"}
              pl={"5px"}
              w={"100%"}
              key={city}
              bg={"white"}
            >
              {city}
            </Button>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

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
      {categorySelector}
      {citySelector}
    </div>
  );
}

export default Searchbar;
