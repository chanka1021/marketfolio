import React from "react";
import { BsXDiamondFill } from "react-icons/bs";
import CategorieCard from "./Cards/CategorieCard";
import { Categories } from "../data/categories";

function CategorieSections() {
  return (
      <div className="w-full 2xl:px-60 md:px-32 items-center text-lg gap-2 justify-between py-4">
        <div className="flex justify-between items-center w-full px-10 max-sm:px-2">
          <h2 className="text-xl max-sm:text-base">What are you looking for?</h2>
          <div className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer  max-sm:text-sm">
            <BsXDiamondFill className="mx-2 text-xl max-sm:text-base " />
            See more
          </div>
        </div>
        <span className="flex flex-wrap  w-full justify-center justify-centers  mt-5 font-[Poppins]">
          {Array.from({ length: 7 }).map((_, i) => {
            const index = i + 1; 
            return (
              <CategorieCard
                link="/products"
                key={index} 
                name={Categories[index].name} 
                icon={Categories[index ].icon}
                color={Categories[index ].color}
              />
            );
          })}
        </span>
      </div>
  );
}

export default CategorieSections;
