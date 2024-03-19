import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const useDeleteListing = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { user } = useAuthContext();

    const deleteListing = async (id) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://marketfolio-be.onrender.com/listing/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${user.token}`,
                },
            });

            if (!response.ok) {
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