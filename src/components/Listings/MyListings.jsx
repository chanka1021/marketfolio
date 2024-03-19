import React, { useEffect, useState } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import img from "../../assets/test.jpg";
import ListingCard from "../Cards/ListingCard";
import img2 from "../../assets/nolisting.png";
import { useGetListing } from "../../hooks/useGetListing";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import useDeleteListing from "../../hooks/useDeleteListing";
import useUpdateListing from "../../hooks/useUpdateListing";

const MyListings = () => {
  const { getListingsOfUser } = useGetListing();
  const { user } = useAuthContext();
  const toast = useToast(); // Add toast hook

  const [MyListings, setMyListings] = useState([]);
  const [dataToUpdate , setDataToUpdate] = useState({});
  const { deleteListing } = useDeleteListing();
  const { updateListing } = useUpdateListing();

  useEffect(() => {
    const fetchMyListings = async () => {
      try {
        const data = await getListingsOfUser(user.id);
        setMyListings(data);
      } catch (err) {
        console.error("Error fetching listings:", err);
      }
    };

    fetchMyListings();
  }, [user.id, getListingsOfUser]);

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
    } catch (error) {
      console.error("Error deleting listing:", error);
      toast({
        title: "Error",
        description: "Error deleting listing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      // Refetch listings after success or failure
      fetchMyListings();
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      await updateListing(id, data);
      toast({
        title: "Success",
        description: "Listing updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error updating listing:", error);
    } 
  };

  return MyListings?.length > 0 ? (
    <Box>
      {MyListings.map((listing) => (
        <ListingCard
          key={listing._id}
          handleDelete={() => handleDelete(listing._id)}
          listing={listing}
          handleUpdate={() => handleUpdate(listing._id, dataToUpdate)} // Adjust the second argument as per your data structure
          setDataToUpdate={setDataToUpdate} // Pass setData function to update MyListings
        />
      ))}
    </Box>
  ) : (
    <span className="text-center flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
      <img className="w-52 rounded-full" src={img2} alt="No Listings Yet" />
      <div className="text-gray-800 font-semibold text-lg">No Listings Yet!</div>
      <div className="text-gray-600 font-semibold text-sm">
        List your product for free on MarketFolio today
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        <Link to="/insert">
          <MdOutlineAddShoppingCart className="inline-block mr-2" />
          List your product
        </Link>
      </button>
    </span>
  );
};

export default MyListings;
