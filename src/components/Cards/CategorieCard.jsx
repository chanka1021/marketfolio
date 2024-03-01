import React from "react";
import { Link } from "react-router-dom";

function CategorieCard(props) {
  return (
    <Link to={props.link}>
    
    
    <div
      style={{ backgroundColor: `${props.color}18  ` }}
      className=" max-sm:h-28 max-sm:w-28 m-1 select-none h-36 w-36 shadow-lg items-center justify-center flex flex-col gap-4 duration-300  hover:scale-105 cursor-pointer hover:shadow-xl "
    >
      <h1 style={{ color: `${props.color}  ` }} className="text-3xl">
        {props.icon}
      </h1>
      <h1 className="text-base max-sm:text-xs">{props.name}</h1>
    </div>
    </Link>
  );
}

export default CategorieCard;
