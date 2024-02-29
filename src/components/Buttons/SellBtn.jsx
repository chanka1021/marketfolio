import React from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";

function SellBtn() {
  return (
    <div>
      <button className="items-center flex bg-red-400 text-white justify-center hover:bg-red-700   px-4 py-2 rounded w-full">
        <a>
          <MdOutlineAddToPhotos className="mr-2" />
        </a>
        sell
      </button>
    </div>
  );
}

export default SellBtn;
