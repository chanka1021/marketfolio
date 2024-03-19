import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const useUpdateListing = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useAuthContext();

    const updateListing = async (id, data) => {
        setIsLoading(true);
        setError(null);

        try {
            // Make a request to the update listing endpoint
            const response = await fetch(`https://marketfolio-be.onrender.com/listing/update/${id}`, {
                method: 'PUT',
                headers: {
                    'authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update listing');
            }

            // Handle the response data if needed
            const updatedListing = await response.json();

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