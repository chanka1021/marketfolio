import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
} from "@chakra-ui/react";
import attentionImg from "../assets/attention.png";
import ProductByCat from "../components/ProductByCat";
import { useParams } from "react-router-dom";
import { useGetListing } from "../hooks/useGetListing";
import { formatDistance } from "date-fns";

const Listing = () => {
  const { user } = useAuthContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { id } = useParams();
  const { error, isPending, getListing } = useGetListing();
  const [listingData, setListingData] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const data = await getListing(id);
        setListingData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };

    fetchListing();
  }, [id]);
  if (!listingData) {
    return null; 
  }
  const { name, description, city, createdAt, price, category, photos,userInfo,status } = listingData;
  
 
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error || status !== "Published") {
    return (
      <div className="w-full flex flex-col mt-20  items-center">
        <div className="  font-['Poppins'] inline-block "> <h1 className=" bg-gradient-to-r from-rose-400 to-red-500  text-9xl font-bold text-transparent bg-clip-text">Error</h1> </div> 
          <h1 className="text-6xl bg-gradient-to-r from-stone-500 to-stone-700 text-transparent bg-clip-text   "> Listing not found </h1>           
      </div>
    );
  }



  
  const dateDiff = () => {
    return formatDistance(new Date(createdAt), new Date())
  }
  
const openPhoneModal = () => {
    onOpen();
  };

  const phoneModal = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image w={"50%"} src={attentionImg} alt="attention" />
          <p className="text-center text-sm text-red-600 ">Attention!</p>
          <p className="text-center mt-5 text-sm text-gray-600 ">
            You should never send money in advance to the seller by bank
            transfer or through a money transfer agency when purchasing goods
            available on the site.
          </p>
          <p className="text-center mt-5 text-sm text-gray-600 ">
            You should always meet the seller at a safe location.
          </p>
          <p className="text-center font-[Poppins] text-base mt-5 text-gray-900 ">
            Call {userInfo.name}
          </p>
          <button className="mt-5 mb-3 p-2 rounded-md px-6 border border-Cyan flex items-center shadow-xl duration-300 hover:bg-Cyan hover:text-white ">
            <MdCall className="mr-3 text-3xl text-gray-600" />
            {userInfo.phone}
          </button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
  const settings = {
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
  return (
    <>
      <div className="w-full xl:px-60 md:px-20 flex flex-col py-4">
        <div className="shadow-md p-5">
          <div className="md:px-32 w-full">
            <Slider {...settings}>
              {photos.map((img, index) => (
                <div key={index}>
                  <img
                    onClick={() => window.open(img)}
                    className="cursor-pointer hover:scale-105 duration-700 w-full h-96 object-cover rounded-md"
                    src={img}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <main className="mt-20">
            <div className="w-full flex flex-col md:flex-row justify-between">
              <div className="mb-5 md:mb-0">
                <h1 className="text-3xl font-bold">{name}</h1>
                <div className="flex flex-col mt-2 md:flex-row md:gap-5">
                  <div className="text-lg flex items-center font-semibold">
                    <MdLocationPin className="mr-1" /> {city}
                  </div>
                  <div className="text-lg flex items-center font-semibold">
                    <RiTimeFill className="mr-1" />  {dateDiff()}
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl text-Cyan font-bold">{price} €</h1>
              </div>
            </div>
            <div className="p-5 mt-5 flex flex-col md:flex-row border-t border-b justify-between items-center">
              <div className="flex items-center mb-5 md:mb-0">
                <Image src={pp} borderRadius="full" />
                <div className="ml-0 mt-3 md:ml-5 md:mt-0">
                  <h1 className="text-2xl font-bold">{userInfo.name}</h1>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <button className="bg-cyan-100 p-2 rounded-full cursor-pointer">
                  <BsChat className="text-3xl text-Cyan" />
                </button>
                <button
                  onClick={openPhoneModal}
                  className="bg-green-100 flex text-lg font-[Poppins] items-center rounded-lg shadow-sm w-fit p-3 cursor-pointer"
                >
                  <MdCall className="text-3xl text-green-950" />
                  Call seller now
                </button>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-lg font-semibold">Description</h1>
              <p className="text-gray-600">
                {description}
              </p>
            </div>
          </main>
        </div>
        {phoneModal}
      </div>
      <div className="p-0 mt-10">
        <h3 className="text-2xl font-bold  xl:px-60 md:px-20 ">
          More listings from this category
        </h3>
        <ProductByCat id="1" />
      </div>
    </>
  );
};

export default Listing;
