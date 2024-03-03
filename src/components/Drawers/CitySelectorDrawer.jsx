import React from "react";
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
  filteredCities,
}) {
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
              type="tel"
              placeholder="Search City"
              borderRadius={40}
              onChange={(e) => {
                const searchValue = e.target.value.toLowerCase();
                const filteredCities = Cities.filter((city) =>
                  city.toLowerCase().startsWith(searchValue)
                );
                filteredCities(filteredCities);
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
}

export default CitySelectorDrawer;
