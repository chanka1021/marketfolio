import axios from "axios";
import { useState } from "react";

export const useGetListing = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [listing, setListing] = useState(null);

  const getListing = async (id) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await axios.get(
        `https://marketfolio-be.onrender.com/listing/one/${id}`
      );
      if (response.status === 200 || response.status === 201) {
        setIsPending(false);
        setError(null);
        setListing(response.data);
        return response.data;
      } else {
        setIsPending(false);
        setError(response.data.error);
      }
    } catch (err) {
      console.error(err);
      setIsPending(false);
      setError(err.response ? err.response.data.error : "An error occurred");
    }
  };
  const getListingsOfUser = async (id) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await axios.get(
        `https://marketfolio-be.onrender.com/listing/user/${id}`
      );
      if (res.status === 200 || res.status === 201) {
        setIsPending(false);
        setError(null);
        setListing(res.data);
        return res.data;
      } else {
        setIsPending(false);
        setError(res.data.error);
      }
    } catch (err) {
      console.error(err);
      setIsPending(false);
      setError(err.response ? err.response.data.error : "An error occurred");
    }
  };
  const getFilteredListings = async (filter) => {
    setError(null);
    setIsPending(true);
    const { category, city, minPrice, maxPrice, status } = filter;
    try {
      const res = await axios.get(
        "https://marketfolio-be.onrender.com/listing/filter",
        {
             params: {
            category: category,
            city:  city,
            minPrice:  minPrice,
            maxPrice:  maxPrice,
            status:  status,
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        setIsPending(false);
        setError(null);
        setListing(res.data);
        return res.data;
      } else {
        setIsPending(false);
        setError(res.data.error);
      }
    } catch (err) {
      console.error(err);
      setIsPending(false);
      setError(err.response ? err.response.data.error : "An error occurred");
    }
  };

  return {
    listing,
    error,
    isPending,
    getListing,
    getListingsOfUser,
    getFilteredListings,
  };
};
