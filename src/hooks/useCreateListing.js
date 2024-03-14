import axios from 'axios';
import { useAuthContext } from './useAuthContext';
import { useState } from 'react';

export const useCreateListing = () => {
    const [fail, setFail] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { user } = useAuthContext();

    const createListing = async (data) => { 
        setFail(null);
        setIsPending(true);

        try {
            const response = await axios.post(
                "http://localhost:2005/listing/create",
                {
                    name: data.name,
                    category: data.cat,
                    description: data.desc,
                    price: data.price,
                    city: data.city,
                    seller: user.id, 
                    address: data.address,
                    // images: data.photos
                }
            );

            if (response.status === 200 || response.status === 201) {
                setIsPending(false);
                setFail(null);
            }
        } catch (error) {
            setIsPending(false);
            setFail(error.response.data.error);
            console.log("3aaa",fail);
        }
    }; 

    return { fail, isPending, createListing };
};
