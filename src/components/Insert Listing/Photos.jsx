import React, { useState } from "react";
import { MdOutlinePhotoCameraBack, MdOutlineStar, MdDeleteForever } from "react-icons/md";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { PiInfo } from "react-icons/pi";

function Photos(props) {
  const [draggedIndex, setDraggedIndex] = useState(null);
  const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml"];
  const maxSize = 5 * 1024 * 1024; // 5MB

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const filteredFiles = files.filter(file => allowedTypes.includes(file.type) && file.size <= maxSize);

    if (filteredFiles.length !== files.length) {
      alert("Invalid file format or size. Please upload images only (JPEG, PNG, SVG) and ensure they are within 5MB.");
      return;
    }

    const uploadedImages = filteredFiles.map((file) => URL.createObjectURL(file));
    props.setPhotos(prevImages => [...prevImages, ...uploadedImages]);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    if (draggedIndex !== null) {
      const newPhotos = [...props.photos];
      const draggedImage = newPhotos[draggedIndex];
      newPhotos.splice(draggedIndex, 1);
      newPhotos.splice(index, 0, draggedImage);
      props.setPhotos(newPhotos);
      setDraggedIndex(null);
    }
  };

  return (
    <div className="shadow-2xl border rounded-xl p-4 md:p-7 mt-5 md:mt-10 px-6 md:px-16 flex flex-col space-y-4">
      <h2 className="text-xl font-semibold my-2 md:my-4">Listing Photos</h2>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 md:h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-3 pb-4 md:pt-5 md:pb-6">
            <MdOutlinePhotoCameraBack className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 text-gray-400" />
            <p className="mb-1 md:mb-2 text-xs md:text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs md:text-sm text-gray-500">SVG, PNG, JPG</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} accept="image/jpeg, image/png, image/svg+xml" />
        </label>
      </div>
      <div className="flex flex-wrap gap-2 px-4 md:px-28 mt-2 md:mt-4">
        {props.photos.map((image, index) => (
          <div key={index} draggable onDragStart={() => handleDragStart(index)} onDragOver={(event) => handleDragOver(event, index)} onDrop={(event) => handleDrop(event, index)} style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}} className="w-24 md:w-40 relative h-24 md:h-40 rounded-lg shadow-sm cursor-move duration-500 ease-in-out hover:shadow-md hover:scale-105">
            {index === 0 && (
              <MdOutlineStar className="text-xl bg-yellow-400 p-1 rounded-full absolute bottom-1 left-1 text-white" />
            )}
            <div className="w-4 h-4 text-xs md:text-base top-1 left-1 absolute bg-Cyan flex items-center justify-center rounded-full text-white">{index + 1}</div>
            <MdDeleteForever onClick={() => props.setPhotos(props.photos.filter((_, i) => i !== index))} className="text-xl bg-red-800 p-1 rounded-full absolute top-1 right-1 text-white cursor-pointer duration-300 hover:bg-red-900 hover:scale-105" />
          </div>
        ))}
      </div>
      <span className="mx-4 md:mx-32 text-xs md:text-sm text-Cyan flex items-center bg-blue-100 py-2 md:py-4 font-[Poppins] rounded-lg">
        <PiInfo className="text-xl md:text-3xl text-blue-900 mx-2 md:mx-3" />
        Rearrange photos to change the cover
      </span>
    </div>
  );
}

export default Photos;
