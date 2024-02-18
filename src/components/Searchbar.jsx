import React from "react";
import { Button, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { TbCategory2 } from "react-icons/tb";
import { FaMapPin } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Searchbar() {
  return (
    <div className="w-full shadow-md ">
      <div className="w-full md:px-60 md:flex items-center gap-1 justify-between py-4">
        <div className="md:w-1/4 h-full px-2">
          <InputGroup>
            <Input
              borderLeftRadius={40}
              bg={"#FAFAFA"}
              type="item"
              placeholder="Looking for ?"
            />
          </InputGroup>
        </div>
        <div className="md:w-1/4 h-full px-2">
          <InputGroup>
            <InputLeftElement>
              <a className="text-gray-600">
                {" "}
                <TbCategory2 />
              </a>
            </InputLeftElement>
            <Input bg={"#FAFAFA"} type="item" placeholder="all categories" />
          </InputGroup>
        </div>
        <div className="md:w-1/4 h-full px-2">
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
        <div className="md:w-1/4 h-full px-2">
            <Button leftIcon={<CiSearch />} borderRightRadius={40} color={"white"}  width={"100%"} bg={"#2455CC"} >Search</Button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
