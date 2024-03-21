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
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('category', data.cat);
            formData.append('description', data.desc);
            formData.append('price', data.price);
            formData.append('city', data.city);
            formData.append('seller', user.id); // Assuming you have user data
            formData.append('address', data.address);

            // Convert image URLs to Blob objects and append them to FormData
            for (let i = 0; i < data.photos.length; i++) {
                const response = await fetch(data.photos[i]);
                const blob = await response.blob();
                formData.append('photos', blob, `photo_${i}.jpg`); // Adjust filename if necessary
            }

            const response = await axios.post('http://18.193.116.80:2005/listing/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': `Bearer ${user.token}`
                }
            });
            
            if (response.status === 200 || response.status === 201) {
                setIsPending(false);
                setFail(null);
                console.log(response.data);
            }


        } catch (error) {
            setIsPending(false);
            setFail(error.response.data.error);
            console.log("3aaa",fail);
        }
    }; 

    return { fail, isPending, createListing };
};
