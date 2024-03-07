import { useState } from 'react';
import axios from 'axios';

const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateUser = async (id, userInfo) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.put(`https://marketfolio-be.onrender.com/user/update/${id}`, userInfo);
            if (response.status === 200 || response.status === 201) {
                setLoading(false);
                setError(null);
                localStorage.setItem('user', JSON.stringify(response.data));
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, updateUser };
};

export default useUpdateUser;