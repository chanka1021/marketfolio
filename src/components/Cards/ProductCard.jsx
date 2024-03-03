import React, { useState } from "react";
import img from "../../assets/test.jpg";
import { IoMdCamera } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { useToast } from "@chakra-ui/react";

function ProductCard(props) {
  const [fav, setFav] = useState(false);
  const toast = useToast();
  const handleFavClick = (name) => {
    if (!fav) {
      toast({
        title: name,
        description: "Added to Favorites",
        status: "success",
        duration: 1400,
        isClosable: true,
      });
      setFav(!fav);
    } else {
      toast({
        title: name,
        description: "Removed From Favorites",
        status: "error",
        duration: 1400,
        isClosable: true,
      });
      setFav(!fav);
    }
  };
 let inProductsPage = props.inProductsPage;
  return (
    <div className={`select-none cursor-pointer duration-500 hover:scale-105 hover:shadow-lg  ${inProductsPage ? 'w-full h-80':'w-72 h-72'} shadow-sm shadow-slate-200 rounded-xl overflow-hidden`}>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-52 relative hover:bg-gray-100"
      >
        <div className="absolute bottom-2 left-2 flex gap-4 text-white">
          <div className="bg-gray-700 flex items-center gap-1 text-sm px-1 rounded-md">
            <IoMdCamera />
            <span>7</span>
          </div>
          <div className="bg-gray-700 flex items-center gap-1 text-sm px-1 rounded-md">
            <AiOutlineClockCircle />
            <span>18 minutes ago</span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h1 className="text-lg font-bold">Product Name</h1>
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold text-Cyan">15245 DH</p>
          <div
            className={`text-lg ${
              fav ? "text-Crimson" : "text-gray-600"
            } hover:text-Crimson transition duration-300`}
            onClick={() => {
              handleFavClick("Product Name");
            }}
          >
            <FaHeart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
