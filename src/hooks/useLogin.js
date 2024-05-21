import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useContext(AuthContext);

  // Submit login form handler
  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await axios.post("http://localhost:2005/user/login", {
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("user", JSON.stringify(response.data));
        //update auth context
        dispatch({ type: "LOGIN", payload: response.data });
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      setIsPending(false);
      setError(err.response.data.error);
    }
  };

  return { error, isPending, login };
};
