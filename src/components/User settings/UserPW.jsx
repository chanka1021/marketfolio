import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const UserPW = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (e) => {
        //check if the new password and the repeat password are the same
        if (newPassword !== repeatPassword) {
            alert('Passwords do not match');
            return;
        }
        alert('Password changed');
        e.preventDefault();
        // Add your password change logic here
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
                </VStack>
            </form>
        </Box>
    );
};

export default UserPW;