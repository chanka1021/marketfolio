import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import img from "../../assets/test.jpg";
import ListingCard from "../Cards/ListingCard";
import img2 from "../../assets/nolisting.png";
import SellBtn from "../Buttons/SellBtn";
const MyListings = () => {
  const listings = [
    {
      id: 1,
      image: img,
      title: "Xbox  Series X",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      status: "Published",
    },
    {
      id: 2,
      image: img,
      title: "Listing 2",
      price: "200",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Hidden",
    },
  ];

  const x = true;

  return x ? (
    <Box>
      {listings.map((listing) => (
        <ListingCard
          title={listing.title}
          key={listing.id}
          img={listing.image}
          price={listing.price}
          desc={listing.description}
          status={listing.status}
        />
      ))}
    </Box>
  ) : (
    <span className="text-center flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
  <img className="w-52 rounded-full" src={img2} alt="No Listings Yet" />
  <div className="text-gray-800 font-semibold text-lg"> No Listings Yet!</div>
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
