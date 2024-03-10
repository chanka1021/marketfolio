import React from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlinePriceChange, MdOutlineTitle } from "react-icons/md";
import { IoMdQuote } from "react-icons/io"; // Changed from LuTextQuote
import { MdEuro } from "react-icons/md";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

function ListingDetails(props) {
  

  return (
    <div className="shadow-2xl border rounded-xl p-4 mt-10 flex flex-col space-y-4">
      <h2 className="text-lg font-semibold">Listing Information</h2>
      <p className="text-sm text-gray-600">
        A listing with an exact price and a detailed description gets 10 times
        more exposure.
      </p>
      <span className="flex items-center ">
        <MdOutlinePriceChange className="text-2xl mr-2 bg-slate-200 rounded-full p-1" />
        Price
      </span>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <MdEuro className="text-2xl mr-2 bg-slate-200 rounded-full p-1" />
        </InputLeftElement>
        <Input
          type="number"
          is
          placeholder="Price"
          onChange={(e) => props.setPrice(e.target.value)}
        />
      </InputGroup>
      <span className="flex items-center ">
        <MdOutlineTitle className="text-2xl mr-2 bg-slate-200 rounded-full p-1" />
        Title
      </span>
      <Input
        className="border border-gray-300 rounded px-2 py-1"
        placeholder="Enter product price"
        type="text"
        onChange={(e) => props.setTitle(e.target.value)}
        value={props.title}
      />
      <span className="flex items-center ">
        <IoMdQuote className="text-2xl mr-2 bg-slate-200 rounded-full p-1" />
        Description
      </span>
      <Textarea
        type="text"
        className="border border-gray-300 rounded px-2 py-1"
        placeholder="Enter product description"
        onChange={(e) => props.setDesc(e.target.value)}
        value={props.desc}
      />
    </div>
  );
}

export default ListingDetails;
