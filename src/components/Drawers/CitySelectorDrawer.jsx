import React, { useState } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { Cities } from "./../../data/cities";

function CitySelectorDrawer({
  isOpen,
  onClose,
  finalFocusRef,
  handleCitySelection,
}) {
  const [filteredCities, setFilteredCities] = useState(Cities);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = Cities.filter((city) =>
      city.toLowerCase().startsWith(searchValue)
    );
    setFilteredCities(filtered);
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
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
              type="text"
              placeholder="Search City"
              borderRadius={40}
              onChange={handleSearch}
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
}

export default CitySelectorDrawer;
