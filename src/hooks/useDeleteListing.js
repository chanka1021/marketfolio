import { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useAuthContext } from './useAuthContext';

const useDeleteListing = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useAuthContext();

    const deleteListing = async (id) => {
        setIsLoading(true);
        setError(null);

        try {
            // Make a request to delete the listing using Axios
            const response = await axios.delete(`http://18.193.116.80:2005/listing/delete/${id}`, {
                headers: {
                    'authorization': `Bearer ${user.token}`,
                },
            });

            // Handle non-200 responses
            if (response.status !== 200) {
                throw new Error('Failed to delete listing');
            }

            // Handle successful deletion here

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { deleteListing, isLoading, error };
};

export default useDeleteListing;
