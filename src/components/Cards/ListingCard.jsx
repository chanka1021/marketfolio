import React, { useRef, useState } from "react";
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
  Skeleton,
} from "@chakra-ui/react";
import { IoIosOptions } from "react-icons/io";
import {
  MdOutlineEdit,
  MdOutlineHideImage,
  MdDeleteForever,
} from "react-icons/md";
import { MdOutlineEuro } from "react-icons/md";

import useUpdateListing from "../../hooks/useUpdateListing";
import useDeleteListing from "../../hooks/useDeleteListing";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

function ListingCard({ listing, setDataToUpdate, handleUpdate, handleDelete }) {
  const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } =
    useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } =
    useDisclosure();
  const [newDesc, setNewDesc] = useState(listing.description);
  const [newPrice, setNewPrice] = useState(listing.price);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cancelRef = useRef(); // Define cancelRef here


  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const handleSave = () => {
    const newData = {
      description: newDesc,
      price: newPrice,
    };
    setDataToUpdate(newData);
    console.log(newData)
    handleUpdate();
    onCloseEdit();
  };

  const handleDeleteConfirm = () => {
    handleDelete();
    onCloseDelete();
  };

  return (
    <>
      <Box
        key={listing._id}
        className="border rounded-lg mb-6 p-4 flex items-center"
      >
        <Skeleton isLoaded={imageLoaded} height="120px" width="120px">
          <img
            src={listing.photos[0]}
            alt={listing.name}
            className="h-32 w-32  object-cover rounded-md mr-4"
            onLoad={() => setImageLoaded(true)}
            style={!imageLoaded ? { display: "none" } : {}}
          />
        </Skeleton>
        <div className="ml-5">
          <p className="text-xl font-bold">{listing.name}</p>
          <p className="text-lg font-bold text-green-700">{listing.price} €</p>
          <p>{truncateDescription(listing.description, 100)}</p>
          <p>
            Status:{" "}
            <span
              className={`text-${
                listing.status === "Published" ? "blue" : "orange"
              }-500`}
            >
              {listing.status}
            </span>
          </p>
        </div>
        <Button variant="ghost" ml="auto">
          <Menu>
            <MenuButton as={Button} variant="ghost">
              <IoIosOptions />
            </MenuButton>
            <MenuList>
              <MenuItem color={"yellow.500"} onClick={onOpenEdit}>
                <MdOutlineEdit className="mx-4" />
                Edit
              </MenuItem>
              <MenuItem>
                <MdOutlineHideImage className="mx-4" />
                Hide
              </MenuItem>
              <MenuItem color={"red"} onClick={onOpenDelete}>
                <MdDeleteForever className="mx-4" />
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Button>
      </Box>

      <Modal isOpen={isOpenEdit} onClose={onCloseEdit}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.6)" backdropFilter="blur(4px)" />
        <ModalContent>
          <ModalHeader>Edit Listing</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h3 className="my-2">Title</h3>
            <Input isDisabled type="text" value={listing.name} />
            <h3 className="my-2">Description</h3>
            <Textarea
              type="text"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
            />
            <h3 className="my-2">Price</h3>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdOutlineEuro />
              </InputLeftElement>
              <Input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                placeholder="Price"
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter gap={6}>
            <Button onClick={onCloseEdit}>Close</Button>
            <Button colorScheme="green" onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AlertDialog isOpen={isOpenDelete} leastDestructiveRef={cancelRef} onClose={onCloseDelete}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Listing
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onCloseDelete}>Cancel</Button>
              <Button colorScheme="red" onClick={handleDeleteConfirm} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default ListingCard;
