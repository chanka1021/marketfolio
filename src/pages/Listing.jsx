import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/test.jpg";
import Slider from "react-slick";
import { FcNext, FcPrevious } from "react-icons/fc";
import { MdLocationPin } from "react-icons/md";
import { RiTimeFill } from "react-icons/ri";
import pp from "../assets/avatar.svg";
import { useAuthContext } from "./../hooks/useAuthContext";
import { Image, useDisclosure } from "@chakra-ui/react";
import { BsChat } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import attentionImg from "../assets/attention.png";
import ProductByCat from "../components/ProductByCat";
const Listing = () => {
  const { user } = useAuthContext();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const images = [img, img, img, img, img];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <FcNext />,
    prevArrow: <FcPrevious />,
  };

  const openPhoneModal = () => {
    onOpen();
  }

  const  phoneModal = (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Image  w={"50%"} src={attentionImg} alt="attention" />
        <p className="text-center   text-sm text-red-600 ">Attention !</p>
        <p className="text-center  mt-5 text-sm text-gray-600 ">You should never send money in advance to the seller by bank transfer or through a money transfer agency when purchasing goods available on the site.</p>
        <p className="text-center  mt-5 text-sm text-gray-600 ">You should always meet the seller at a safe location.</p>
        <p className="text-center font[Poppins] text-base mt-5  text-gray-900 ">Call {user.name}</p>
        <button  className="mt-5 mb-3 p-2 rounded-md px-6 border border-Cyan flex items-center shadow-xl duration-300 hover:bg-Cyan hover:text-white ">
          <MdCall className=" mr-3 text-3xl text-gray-600" />
          123-4567890
        </button>
      </ModalBody>
    </ModalContent>
  </Modal>
  )
  return (
    <>
    <span className="w-full xl:px-60 md:px-20  flex flex-col  py-4">
        <span className=" shadow-md p-5">
      <div className="  md:px-20 w-full">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                onClick={() => window.open(img)}
                className=" cursor-pointer hover:scale-105 duration-700 w-full h-96 object-cover"
                src={img}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <main className="mt-20">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Product Name</h1>
            <div className="flex gap-5">
              <div className="text-lg flex items-center font-semibold">
                {" "}
                <MdLocationPin className="mr-1" /> Madrid
              </div>
              <div className="text-lg flex items-center font-semibold">
                {" "}
                <RiTimeFill className="mr-1" /> 3 hours ago{" "}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl text-Cyan font-bold">5000 €</h1>
            <p className="text-lg font-semibold">Negotiable</p>
          </div>
        </div>
        <div className="p-5 mt-5 flex border-t border-b justify-between ">
          <div className="flex  items-center">
            <Image src={pp} borderRadius="full" />
            <div className="ml-5">
              <h1 className="text-2xl font-bold">{user.name}</h1>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <button className="bg-cyan-100 p-2 rounded-full cursor-pointer">
              <BsChat className="text-3xl text-Cyan"  />
            </button>
            <button onClick={openPhoneModal} className="bg-green-100 flex text-lg font-[poppins] items-center rounded-lg shadow-sm w-fit p-3 cursor-pointer">
              <MdCall className="text-3xl text-green-950"  />
              Call seller now
            </button>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-lg font-semibold">Description</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </main>
      </span>
      {phoneModal}
    </span>
     <div className="p-0">

     <h3 >more listings from this category </h3>
     <ProductByCat id="1"/>
</div>
</>

  );
};

export default Listing;
