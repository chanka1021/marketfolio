import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./Cards/ProductCard";
import { Categories } from "../data/categories";
import { BsXDiamondFill } from "react-icons/bs";
import { FcNext, FcPrevious } from "react-icons/fc";

function ProductByCat({ id }) {
  const cat = Categories.find((cat) => cat.id === id);
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
    nextArrow: <FcNext />,
    prevArrow: <FcPrevious/>,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="w-full xl:px-60 md:px-20 items-center text-lg gap-2 justify-between py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <a style={{ color: cat.color }} className="mx-2">
              {cat.icon}
            </a>{" "}
            {cat.name}
          </h2>
          <div className=" font-[Poppins]  duration-200 flex items-center py-5 text-blue-600 hover:text-indigo-950 cursor-pointer text-sm">
            <BsXDiamondFill className="mr-2 text-lg" />
            See more
          </div>
        </div>
        <Slider {...settings} className="Cards-Slider py-5 text-black">
          {[...Array(8)].map((_, index) => (
            <ProductCard key={index}  />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductByCat;
