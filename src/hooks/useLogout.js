import { useAuthContext } from "./useAuthContext";
import { useToast } from '@chakra-ui/react'

export const useLogout = () => {
  const toast = useToast()

  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    toast({
      title: 'Logged out.',
      description: "See you next time 👋",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  };
  return {logout};
};
