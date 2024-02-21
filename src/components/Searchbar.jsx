import React, { useRef, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
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
import { FaMapPin } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { Categories } from "../data/categories";

function Searchbar() {
  const [selectedCategory, setSelectedCategory] = useState(Categories[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
  return (
    <div className="w-full shadow-md ">
      <div className="w-full md:px-60 md:flex items-center gap-2 justify-between py-4">
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
        <div className="md:w-1/4 h-full py-2 md:py-0 MD:px-2">
          <Button
            onClick={onOpen}
            _hover={{ bg: "#24lorCC" }}
            rightIcon={<MdNavigateNext className="text-2xl" />}
            leftIcon={
              <div
                style={{ color: `${selectedCategory.color}` }}
                className="text-2xl"
              >
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
        <div className="md:w-1/4 h-full  md:px-2">
          <InputGroup>
            <InputLeftElement>
              <a className="text-gray-600">
                {" "}
                <FaMapPin />
              </a>
            </InputLeftElement>
            <Input bg={"#FAFAFA"} type="item" placeholder="all of germany" />
          </InputGroup>
        </div>
        <div className="md:w-1/4 h-full md:px-2 max-sm:mt-5">
          <Button
            _hover={{ bg: "#24s4lorCC" }}
            leftIcon={
              <div className="text-2xl">
                <CiSearch />
              </div>
            }
            color={"white"}
            borderRightRadius={40}
            width={"100%"}
            bg={"#2455CC"}
          >
            Search
          </Button>
        </div>
      </div>
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
              category.childerns ? (
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        w={"100%"}
                        justifyContent={"start"}
                        key={category.id}
                      >
                        <div className="flex items-center gap-2 font-semibold">
                          <a
                            style={{ color: `${category.color}` }}
                            className="text-xl pr-2 "
                          >
                            {category.icon}
                          </a>
                          {category.name}
                        </div>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      {category.childerns.map((child) => (
                        <Button
                          bg={"white"}
                          padding={"10px 20px"}
                          justifyContent={"start"}
                          w={"100%"}
                          onClick={() => handleCategoryClick(category, child)}
                          leftIcon={
                            <a
                              style={{ color: `${category.color}` }}
                              className="text-xl pr-2"
                            >
                              {child.icon}
                            </a>
                          }
                          color
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
                    <a
                      style={{ color: `${category.color}` }}
                      className="text-xl pr-2 "
                    >
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
    </div>
  );
}

export default Searchbar;
