import { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useAuthContext } from './useAuthContext';

const useUpdateListing = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useAuthContext();

    const updateListing = async (id, data) => {
        setIsLoading(true);
        setError(null);

        try {
            // Make a request to the update listing endpoint using Axios
            const response = await axios.put(`http://localhost:2005/listing/update/${id}`, data, {
                headers: {
                    'authorization': `Bearer ${user.token}`,
                },
            });

            // Handle non-200 responses
            if (response.status !== 200) {
                throw new Error('Failed to update listing');
            }

            // Handle the response data if needed
            const updatedListing = response.data;

            // Return the updated listing or perform any other necessary actions
            return updatedListing;
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, error, updateListing };
};

export default useUpdateListing;
