import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./Cards/ProductCard";
import { Categories } from "../data/categories";
import { BsXDiamondFill } from "react-icons/bs";
import arrowL from "../assets/arrow.svg";
import arrowR from "../assets/arrow rotated.svg";
import { Box, Spinner } from "@chakra-ui/react"; // Import Spinner
import { useGetListing } from "../hooks/useGetListing";
import { Link } from "react-router-dom";

function ProductByCat({ cat }) {
  const { getFilteredListings, isPending } = useGetListing(); // Get isPending
  const [listings, setListings] = useState([]);

  // Fetch data
  useEffect(() => {
    fetchedListings();
  }, []);

  // Function to fetch listings based on applied filters
  const fetchedListings = async () => {
    try {
      const category = categoryDetails.name === "All Categories" ? null : categoryDetails.name;
      const status = "Published";
      const data = await getFilteredListings({ category, status });
      setListings(data);
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };

  //// Category handle 
  let categoryDetails = Categories.find((category) => category.name === cat);
  // If category details are not found, search in children
  if (!categoryDetails) {
    Categories.forEach((category) => {
      if (category.childrens) {
        const childCategory = category.childrens.find((child) => child.name === cat);
        if (childCategory) {
          categoryDetails = childCategory;
          categoryDetails.color = category.color;
        }
      }
    });
  }

  if (!cat) {
    return null;
  }

  const settings = {
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: true,
    centerMode: true,
    slidesToShow: 4,
    nextArrow: <img src={arrowR} className="w-10 h-10" />,
    prevArrow: <img src={arrowL} className="w-10 h-10" />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1126,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="w-full 2xl:px-60 md:px-20 items-center text-lg gap-2 justify-between py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <a style={{ color: categoryDetails.color }} className="mx-2">
              {categoryDetails.icon}
            </a>{" "}
            {categoryDetails.name}
          </h2>
          <Link to={"/products"}>
            <div className="font-[Poppins] duration-200 flex items-center py-5 text-blue-600 hover:text-indigo-950 cursor-pointer text-sm">
              <BsXDiamondFill className="mr-2 text-lg" />
              See more
            </div>
          </Link>
        </div>
        {isPending ? (
          <Box className="flex justify-center items-center h-full">
            <Spinner size="xl" />
          </Box>
        ) : (
          <Slider {...settings} className="Cards-Slider py-5 text-black">
            {listings.length > 0 ? (
              listings.map((listing, index) => (
                <ProductCard key={index} listing={listing} />
              ))
            ) : (
              <div className="text-center w-full text-gray-500">No listings available</div>
            )}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default ProductByCat;
