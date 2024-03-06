import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Button, ButtonGroup } from '@chakra-ui/react'; // Import ButtonGroup
import { Cities } from './../../data/cities';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useForm } from 'react-hook-form';

const UserInfos = () => {
    const { user } = useAuthContext();
    const { register, handleSubmit, reset, formState: { isDirty } } = useForm({ defaultValues: user });

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleCancelChanges = () => {
        reset(user);
    };

    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)} p={4}  borderRadius="md">
            <FormControl mb={4}>
                <FormLabel>Name</FormLabel>
                <Input type="text" {...register('name')} />
            </FormControl>

            <FormControl mb={4}>
                <FormLabel>Mobile</FormLabel>
                <Input type="tel" {...register('phone')} />
            </FormControl>

            <FormControl mb={4}>
                <FormLabel>City</FormLabel>
                <Select placeholder="Select your city" {...register('city')}>
                    {Cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </Select>
            </FormControl>

            <FormControl mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={user.email} isDisabled />
            </FormControl>

            <ButtonGroup>
                {isDirty && <Button colorScheme="red" onClick={handleCancelChanges}>Cancel</Button>}
                <Button type="submit" colorScheme="blue">Save</Button>
            </ButtonGroup>
        </Box>
    );
};
export default UserInfos;
