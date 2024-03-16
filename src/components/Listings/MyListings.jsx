import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import img from "../../assets/test.jpg";
import ListingCard from "../Cards/ListingCard";
import img2 from "../../assets/nolisting.png";
import { useGetListing } from "../../hooks/useGetListing";
import { useAuthContext } from "./../../hooks/useAuthContext";

const MyListings = () => {
  const { getListingsOfUser } = useGetListing();
  const { user } = useAuthContext();

  const [MyListings, setMyListings] = useState();
 
  useEffect(() => {
    const fetchMyListings = async () => {
      try {
        const data = await getListingsOfUser(user.id);
        setMyListings(data);
      } catch (err) {
        console.log("error : ", err);
      }
    };

    fetchMyListings();

  }, [, user.id]);  

 console.log("Ylis",MyListings)

  
  const x =  MyListings?.length > 0 ? true : false;
 


  const image = (images) =>{
  const url = "https://marketfolio-be.onrender.com/"
    return `${url}${images[0].replace('public/', '')}`
  }
  return x ? (
    <Box>
      {MyListings.map((listing) => (
        <ListingCard
          title={listing.name}
          key={listing.id}
          img={image( listing.photos)}
          price={listing.price}
          desc={listing.description}
          status={listing.status}
        />
      ))}
    </Box>
  ) : (
    <span className="text-center flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
      <img className="w-52 rounded-full" src={img2} alt="No Listings Yet" />
      <div className="text-gray-800 font-semibold text-lg">
        {" "}
        No Listings Yet!
      </div>
      <div className="text-gray-600 font-semibold text-sm">
        List your product for free on MarketFolio today
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        <MdOutlineAddShoppingCart className="inline-block mr-2" />
        List your product
      </button>
    </span>
  );
};

export default MyListings;
