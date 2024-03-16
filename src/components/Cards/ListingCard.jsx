import React, { useState } from "react";
import {
  Box,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Textarea,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoIosOptions } from "react-icons/io";
import {
  MdOutlineEdit,
  MdOutlineHideImage,
  MdDeleteForever,
} from "react-icons/md";
import { MdOutlineEuro } from "react-icons/md";

function ListingCard(props) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [newDesc, setNewDesc] = useState(props.desc);
  const [newPrice, setNewPrice] = useState(props.price); // Added state for price

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  function CloseModel() {
    setNewDesc(props.desc);
    setNewPrice(props.price); 
    onClose();
  }

  function handleClick() {
    setOverlay(<OverlayOne />);
    onOpen();
  }

  function handleSave() {
    // Call a function to save the changes and pass newPrice to it
    // For example: props.onSave(newPrice);
    // Remember to implement the onSave function in the parent component
    onClose();
  }

  return (
    <>
      <Box
        key={props.id}
        className="border rounded-lg mb-6 p-4 flex items-center"
      >
        <Image
          src={props.img}
          alt={props.title}
          className="h-32 w-32 bg-cover rounded-md mr-4"
        />
        <Box>
          <p className="text-xl font-bold">{props.title}</p>
          <p className="text-lg font-bold text-green-700">{props.price} €</p>
          <p>{truncateDescription(props.desc, 100)}</p>
          <p>
            Status:
            <span
              className={
                props.status === "Published"
                  ? "text-blue-500"
                  : "text-orange-500"
              }
            >
              <a className="px-2 text-[poppins] ">{props.status}</a>
            </span>
          </p>
        </Box>
        <Button variant="ghost" ml="auto">
          <Menu>
            <MenuButton as={Button} variant="ghost">
              <IoIosOptions />
            </MenuButton>
            <MenuList>
              <MenuItem color={"yellow.500"} onClick={handleClick}>
                <MdOutlineEdit className="mx-4" />
                Edit
              </MenuItem>
              <MenuItem>
                <MdOutlineHideImage className="mx-4" />
                Hide
              </MenuItem>
              <MenuItem color={"red"}>
                <MdDeleteForever className="mx-4" />
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Button>
      </Box>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* ////title */}
            <h3 className="my-2">Title </h3>
            <Input isDisabled={true} type="text" value={props.title} />
            {/* /// desc */}
            <h3 className="my-2">Description </h3>
            <Textarea
              type="text"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
            />
            {/* /// price */}
            <h3 className="my-2">Price </h3>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdOutlineEuro />
              </InputLeftElement>
              <Input
                type="number"
                value={newPrice} // Use newPrice state here
                onChange={(e)=>setNewPrice(e.target.value)} // Handle price change
                placeholder="Price"
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter gap={6}>
            <Button onClick={CloseModel}>Close</Button>
            <Button colorScheme="green" onClick=  {()=>{handleSave()}} >Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ListingCard;
