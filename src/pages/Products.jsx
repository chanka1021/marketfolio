import React, { useContext, useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useDisclosure,
  Box,
  Spinner
} from "@chakra-ui/react";
import { RiHome3Line } from "react-icons/ri";
import ProductCard from "../components/Cards/ProductCard";
import img from "../assets/avatar.svg";
import { MdOutlinePriceChange } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Searchbar from "../components/Searchbar";
import PriceDrawer from "../components/Drawers/PriceDrawer";
import { Categories } from "../data/categories";
import { FilterContext } from "../context/FilterContext";
import { useGetListing } from "../hooks/useGetListing";
import { Link } from "react-router-dom";

function Products() {
  // State and context management
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const { selectedCategory, selectedCity } = useContext(FilterContext);
  const { getFilteredListings, isPending } = useGetListing(); // Get isPending
  const [listings, setListings] = useState([]);
  const productsPerPage = 30;
  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;

  // Fetch listings based on selected category and city
  useEffect(() => {
    fetchedListings();
  }, [currentPage, selectedCategory, selectedCity]);

  // Function to fetch listings based on applied filters
  const fetchedListings = async () => {
    try {
      const category = selectedCategory.name === "All Categories" ? null : selectedCategory.name;
      const city = selectedCity === "ALL" ? null : selectedCity;
      const status = "Published";
      const data = await getFilteredListings({ category, city, status });
      setListings(data);
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };

  // Pagination function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get category details
  let categoryDetails = Categories.find((category) => category.name === selectedCategory.name);

  // If category details are not found, search in children
  if (!categoryDetails) {
    Categories.forEach((category) => {
      if (category.childrens) {
        const childCategory = category.childrens.find((child) => child.name === selectedCategory.name);
        if (childCategory) {
          categoryDetails = childCategory;
          categoryDetails.parentColor = category.color;
        }
      }
    });
  }

  return (
    <div className="w-full">
      <Searchbar />
      <div className="w-full xl:px-60 md:px-16 mx-auto flex flex-col mt-5">
        {/* Breadcrumb navigation */}
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <a className="flex items-center">
                <RiHome3Line className="text-xl mr-1" /> Home
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{categoryDetails?.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        {/* Category buttons */}
        <div className="flex flex-wrap py-4 gap-1">
          <button
            className="hover:bg-blue-200 bg-slate-200 flex items-center text-black font-bold py-2 px-4 rounded-full"
            style={{ color: `${categoryDetails?.color}` }}
          >
            {categoryDetails?.icon} {categoryDetails?.name}
          </button>
          {/* Button to open price drawer */}
          <button
            onClick={onOpen}
            className="hover:bg-blue-200 bg-slate-200 flex items-center text-black font-bold py-2 px-4 rounded-full"
          >
            <MdOutlinePriceChange className="text-xl mx-2 text-green-900 " />
            Price
            <MdKeyboardArrowRight className="text-xl mx-2 " />
          </button>
        </div>
        {/* Listing header */}
        <h1 className="text-3xl font-semibold text-gray-800 font-[Poppins] mt-4">
          All Listings in {selectedCity ? selectedCity : "All cities"} ({listings.length} listings)
        </h1>
        {/* Listing cards */}
        {isPending ? (
          <Box className="flex justify-center items-center h-full">
            <Spinner size="xl" />
          </Box>
        ) : (
          <div className="mt-8 flex flex-wrap -mx-4">
            {listings.slice(indexOfFirstProduct, indexOfFirstProduct + productsPerPage).map((listing) => (
              <div key={listing._id} className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 m-8 md:m-4">
                <Link to={`/listing/${listing._id}`}>
                  <div className="rounded-md w-full hover:scale-105 duration-300 cursor-pointer select-none hover:shadow-2xl">
                    <div className="flex items-center py-2">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src={img} alt="Profile" className="w-full h-full object-cover hover:opacity-75" />
                      </div>
                      <p className="font-semibold ml-2 hover:text-blue-600"> {listing.userInfo.name}</p>
                    </div>
                    <ProductCard inProductsPage listing={listing} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
        {/* Pagination */}
        <div className="mt-8">
          <nav className="flex justify-center">
            <ul className="flex">
              {Array.from({ length: Math.ceil(listings.length / productsPerPage) }, (_, index) => index + 1).map((page) => (
                <li key={page}>
                  <button
                    className={`${currentPage === page ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                      } px-3 py-1 mx-1 rounded-md`}
                    onClick={() => paginate(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* Price drawer component */}
      <PriceDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default Products;
