import React, { useState, useEffect } from 'react';
import ProductCard from './../Cards/ProductCard';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFavListing } from '../../hooks/useFavListing';

function Myfav() {
  const { user } = useAuthContext();
  const { fetchFavListing } = useFavListing();
  const [listings, setListings] = useState([]);

  useEffect(() => {
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

  return (
    <div className='w-full flex flex-wrap mx-4 gap-2'>
      {listings.map((listing) => (
        <ProductCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

export default Myfav;
