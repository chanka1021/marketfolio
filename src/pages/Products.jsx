import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  useDisclosure,
} from "@chakra-ui/react";
import { RiHome3Line } from "react-icons/ri";
import ProductCard from "../components/Cards/ProductCard";
import img from "../assets/profile.jpg"; 
import { MdOutlinePriceChange } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Searchbar from "../components/Searchbar";
import PriceDrawer from "../components/Drawers/PriceDrawer";
import { Categories } from "../data/categories";

function Products() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const productCount = 50;
  const productsPerPage = 30;
  const totalPages = Math.ceil(productCount / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const tempProducts = Array.from({ length: productCount }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const currentProducts = tempProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const x = Categories[1]
  return (
    <div className="w-full">
      <Searchbar />
      <div className="w-full xl:px-60 md:px-16 mx-auto flex flex-col mt-5">
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <a className="flex items-center">
                <RiHome3Line className="text-xl mr-1" /> Home
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{x.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="flex flex-wrap py-4 gap-1">
          {x.childrens ? (
          x.childrens.map((category, index) => (
            <button
              key={index}
              className="hover:bg-blue-200 bg-slate-200 flex items-center text-black font-bold py-2 px-4 rounded-full"
            >
              <a style={{ color: `${x.color}` }} className="text-xl mx-2 ">
                {category.icon}{" "}
              </a>
              {category.name}
            </button>
          ))):(
            <></>
          )
          }
          <button onClick={onOpen} className="hover:bg-blue-200 bg-slate-200 flex items-center text-black font-bold py-2 px-4 rounded-full">
            <MdOutlinePriceChange className="text-xl mx-2 text-green-900 " />
            Price
            <MdKeyboardArrowRight className="text-xl mx-2 " />
          </button>
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 font-[Poppins] mt-4">
          All Listings in Berlin (3322 listings)
        </h1>
        <div className="mt-8 flex flex-wrap -mx-4">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 m-8 md:m-4"
            >
              <div className="rounded-md w-full hover:scale-105 duration-300 cursor-pointer select-none hover:shadow-2xl">
                <div className="flex items-center py-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={img} 
                      alt="Profile"
                      className="w-full h-full object-cover hover:opacity-75"
                    />
                  </div>
                  <p className="font-semibold ml-2 hover:text-blue-600">Achraf</p>
                </div>
                <ProductCard inProductsPage />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <nav className="flex justify-center">
            <ul className="flex">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <li key={page}>
                    <button
                      className={`${
                        currentPage === page
                          ? "bg-blue-500 text-white"
                          : "bg-white text-blue-500"
                      } px-3 py-1 mx-1 rounded-md`}
                      onClick={() => paginate(page)}
                    >
                      {page}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
      <PriceDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default Products;
