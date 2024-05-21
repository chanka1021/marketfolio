import { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useAuthContext } from './useAuthContext';

export const useFavListing = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useAuthContext(); 

    const favListing = async (data) => {
        setIsLoading(true);
        setError(null);
        
        try{
            const response = await axios.post(`http://localhost:2005/user/addfav`, {
                headers: {
                    'authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify(data),
            });
            
            console.log('Successfully added to favorites :', response.data);
        } catch(err){
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const unfavListing = async (data) => {
        setIsLoading(true);
        setError(null);
        try{
            const response = await axios.post(`http://localhost:2005/user/removefav`, {
                headers: {
                    'authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify(data),

            });
            
            console.log('Successfully removed from favorites :', response.data);
        } catch(err){
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    const fetchFavListing = async (id) => {
        try {
            const data = await axios.get(`http://localhost:2005/listing/fav/${id}`, {
                headers: {
                    'authorization': `Bearer ${user.token}`,
                },
            });
            return data;
        } catch (err) {
            console.error("Error fetching listings:", err);
        }
    }
    return { isLoading, error, favListing , unfavListing,fetchFavListing };
};