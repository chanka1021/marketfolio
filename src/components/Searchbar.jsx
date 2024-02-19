import React, { useRef, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { TbCategory2 } from "react-icons/tb";
import { FaMapPin } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { Categories } from "../data/categories";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function Searchbar() {
  const [selectedCategory, setSelectedCategory] = useState(Categories[0].name);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
            leftIcon={<TbCategory2 className="text-xl text-Cyan" />}
            justifyContent={"space-between"}
            color={"black"}
            width={"100%"}
          >
            {selectedCategory}
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
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button
              rightIcon={<MdNavigateNext />}
              onClick={onClose}
              colorScheme="blue"
            >
              Confirm
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Searchbar;
