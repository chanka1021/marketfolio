import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useToast } from "@chakra-ui/react";

const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AuthContext);
  const toast = useToast();

  const updateUser = async (id, data, oldPassword) => {
    setLoading(true);
    setError(null);

    try {
      const requestData = { ...data, passwordOLD: oldPassword };
      const response = await axios.put(
        `http://3.79.56.117:2005/user/update/${id}`,
        requestData
      );
      if (response.status === 200 || response.status === 201) {
        console.log(requestData);
        setLoading(false);
        setError(null);
        dispatch({ type: "UPDATE_USER", payload: response.data });
        toast({
          title: "Infos updated successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (err) {
      if (
        err.response &&
        err.response.data &&
        err.response.data.error === "Incorrect password"
      ) {
        setError("Incorrect password. Please try again.");
      } else {
        setError("An error occurred while updating the user.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, updateUser };
};

export default useUpdateUser;
