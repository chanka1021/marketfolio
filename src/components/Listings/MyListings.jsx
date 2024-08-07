import React, { useEffect, useState } from "react";
import { Box, useToast, Spinner, Text, Button } from "@chakra-ui/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import img2 from "../../assets/nolisting.png";
import ListingCard from "../Cards/ListingCard";
import { useGetListing } from "../../hooks/useGetListing";
import { Link } from "react-router-dom";
import useDeleteListing from "../../hooks/useDeleteListing";
import useUpdateListing from "../../hooks/useUpdateListing";
import { useAuthContext } from "../../hooks/useAuthContext";

const MyListings = () => {
  const { getListingsOfUser, isPending } = useGetListing();
  const { user } = useAuthContext();
  const toast = useToast();
  const [myListings, setMyListings] = useState([]);

  const { deleteListing } = useDeleteListing();
  const { updateListing } = useUpdateListing();

  useEffect(() => {
    fetchMyListings();
  }, []);

  const fetchMyListings = async () => {
    try {
      const data = await getListingsOfUser(user.id);
      setMyListings(data);
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteListing(id);
      toast({
        title: "Success",
        description: "Listing deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      fetchMyListings();
    } catch (error) {
      console.error("Error deleting listing:", error);
      toast({
        title: "Error",
        description: "Error deleting listing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdate = async (id, newData) => {
    try {
      await updateListing(id, newData);
      toast({
        title: "Success",
        description: "Listing updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      fetchMyListings();
    } catch (error) {
      console.error("Error updating listing:", error);
      toast({
        title: "Error",
        description: "Error updating listing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleVisibility = async (id, newStatus) => {
    try {
      await updateListing(id, { status: newStatus });
      toast({
        title: "Success",
        description: "Visibility updated to " + newStatus,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      fetchMyListings();
    } catch (error) {
      console.error("Error updating visibility:", error);
    }
  };

  if (isPending) {
    return (
      <Box className="flex justify-center items-center h-full">
        <Spinner size="xl" />
      </Box>
    );
  }

  return myListings.length > 0 ? (
    <Box>
      {myListings.map((listing) => (
        <ListingCard
          key={listing._id}
          handleDelete={() => handleDelete(listing._id)}
          listing={listing}
          handleVisibility={(newStatus) => handleVisibility(listing._id, newStatus)}
          handleUpdate={(newData) => handleUpdate(listing._id, newData)}  
        />
      ))}
    </Box>
  ) : (
    <Box className="text-center flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
      <img className="w-52 rounded-full" src={img2} alt="No Listings Yet" />
      <Text className="text-gray-800 font-semibold text-lg">No Listings Yet!</Text>
      <Text className="text-gray-600 font-semibold text-sm">
        List your product for free on MarketFolio today
      </Text>
      <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        <Link to="/insert">
          <MdOutlineAddShoppingCart className="inline-block mr-2" />
          List your product
        </Link>
      </Button>
    </Box>
  );
};

export default MyListings;
