import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react';
import useUpdateUser from '../../hooks/useUpdateUser';
import { useAuthContext } from '../../hooks/useAuthContext';

const UserPW = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const { error, isPending, updateUser } = useUpdateUser();
    const { user } = useAuthContext();
const toast = useToast();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== repeatPassword) {
            toast({
                title: "Passwords don't match",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        updateUser(user.id, { password: newPassword }, password);
        //clear field 
        setPassword('');
        setNewPassword('');
        setRepeatPassword('');

    };

    return (
        <Box p={4}>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="start">
                    <FormControl>
                        <FormLabel>Current Password</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>New Password</FormLabel>
                        <Input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Repeat Password</FormLabel>
                        <Input
                            type="password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="blue">
                        Change Password
                    </Button>
                    {error && <p>{error}</p>}
                </VStack>
            </form>
        </Box>
    );
};

export default UserPW;