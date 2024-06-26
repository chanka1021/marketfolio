import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const signup = async (name, email, password, city, phone) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await axios.post("https://marketfolio-be.onrender.com/user/signup", {
        name,
        email,
        password,
        city,
        phone,
      });

      if (response.status === 200 || response.status === 201) {
        setIsPending(false);
        setError(null);
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({ type: "LOGIN", payload: response.data });
      }
    } catch (error) {
      setIsPending(false);
      setError(error.response.data.error);
    }
  };

  return { error, isPending, signup };
};
