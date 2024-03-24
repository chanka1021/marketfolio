import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "../../context/FilterContext";

function CategorieCard(props) {
  const { setSelectedCategory } = useContext(FilterContext);
  const [cat, setCat] = useState(null);

  useEffect(() => {
    if (props.category.childrens) {
      setCat(props.category.childrens[0]);
    } else {
      setCat(props.category);
    }
  }, [props.category]);

  const handleClick = () => {
  setSelectedCategory(cat); 
  };

  return (
    <Link onClick={handleClick} to="/products">
      <div
        style={{ backgroundColor: `${props.color}18` }}
        className="max-sm:h-28 max-sm:w-28 m-1 select-none h-36 w-36 shadow-lg items-center justify-center flex flex-col gap-4 duration-300 hover:scale-105 cursor-pointer hover:shadow-xl"
      >
        {cat && (
          <>
            <h1 style={{ color: `${props.color}` }} className="text-3xl">
              {cat.icon}
            </h1>
            <h1 className="text-base max-sm:text-xs">{cat.name}</h1>
          </>
        )}
      </div>
    </Link>
  );
}

export default CategorieCard;
