import React, { useCallback, useEffect, useState } from "react";
import img from "../../assets/test.jpg";
import { IoMdCamera } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { useToast } from "@chakra-ui/react";
import { formatDistance } from "date-fns";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFavListing } from '../../hooks/useFavListing';

function ProductCard(props) {
  const { name, price, photos, desc, _id, createdAt } = props.listing || { name: null, price: null, photos: [], createdAt: null };
  const [fav, setFav] = useState(false);
  const toast = useToast();
  const { user } = useAuthContext();
  const { fetchFavListing, favListing, unfavListing } = useFavListing();
  const [listings, setListings] = useState([]);



  /* useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetchFavListing(user.id);
        setListings(response.data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, [user.id, fetchFavListing]);

  useEffect(() => {
    const isFavorite = listings.some((listing) => listing._id === _id);
    setFav(isFavorite);

  }, [listings, _id]); */

/*   const handleFavClick = useCallback(async (name) => {

    try {
      if (!fav) {
        await favListing(listingData);
        toast({
          title: name,
          description: "Added to Favorites",
          status: "success",
          duration: 1400,
          isClosable: true,
        });
      } else {
        await unfavListing(listingData); 
        toast({
          title: name,
          description: "Removed from Favorites",
          status: "error",
          duration: 1400,
          isClosable: true,
        });
      }
      setFav(!fav);
    } catch (error) {
      console.error("Error:", error);
    }
  }, [fav, favListing, unfavListing, toast]);
 */
const handleFavClick =async (name) =>{
  if (!fav) {
   await favListing(listingData); 
    toast({
      title: name,
      description: "Added to Favorites",
      status: "success",
      duration: 1400,
      isClosable: true,
    });
  } else {
    await unfavListing(listingData);
    toast({
      title: name,
      description: "Removed from Favorites",
      status: "error",
      duration: 1400,
      isClosable: true,
    });
  }
  setFav(!fav);
}
  const inProductsPage = props.inProductsPage;
  const time = props.listing ? formatDistance(new Date(createdAt), new Date()) : null;

  return (
    <Link to={`/listing/${_id}`}>
      <div className={`select-none cursor-pointer duration-500 hover:scale-105 hover:shadow-lg shadow-xl ${inProductsPage ? 'w-full h-80':'w-72 h-72'} shadow-sm shadow-slate-200 rounded-xl overflow-hidden`}>
        {props.listing ? (
          <div className="w-full h-52 relative">
            <LazyLoadImage
              src={photos[0] || img}
              alt={name}
              width={"100%"}
              effect="blur"
              className="w-full  h-52 object-cover hover:opacity-75 transition-opacity duration-300"
            />
            <div className="absolute bottom-2 left-2 flex gap-4 text-white">
              <div className="bg-gray-700 flex items-center gap-1 text-sm px-1 rounded-md">
                <IoMdCamera />
                <span> {1}</span>
              </div>
              <div className="bg-gray-700 flex items-center gap-1 text-sm px-1 rounded-md">
                <AiOutlineClockCircle />
                <span> {time}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-52 bg-gray-200"></div>
        )}
        <div className="p-3">
          <h1 className="text-lg font-bold"> {name}</h1>
          <div className="flex justify-between items-center">
            <p className="text-base font-semibold text-Cyan"> {price} €</p>
            <div
              className={`text-lg ${fav ? "text-Crimson" : "text-gray-600"} hover:text-Crimson transition duration-300`}
              onClick={() => {
                handleFavClick( name);
              }}
            >
              <FaHeart />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
