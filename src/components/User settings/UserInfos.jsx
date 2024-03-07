import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Button, ButtonGroup } from '@chakra-ui/react'; // Import ButtonGroup
import { Cities } from './../../data/cities';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useForm } from 'react-hook-form';
import useUpdateUser from '../../hooks/useUpdateUser';

const UserInfos = () => {
    const { user } = useAuthContext();
    const { register, handleSubmit, reset, formState: { isDirty, errors } } = useForm({ defaultValues: user });
    const { error, isPending, updateUser } = useUpdateUser();

    const onSubmit = async (data) => {
        await updateUser(user.id, data);
        console.log(data);
    };

    const handleCancelChanges = () => {
        reset(user);
    };

    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)} p={4}  borderRadius="md">
            <FormControl mb={4}>
                <FormLabel>Name</FormLabel>
                <Input type="text" {...register('name', { required: true })} />
                {errors.name && <span>This field is required</span>}
            </FormControl>

            <FormControl mb={4}>
                <FormLabel>Mobile</FormLabel>
                <Input type="tel" {...register('phone', { required: true })} />
                {errors.phone && <span>This field is required</span>}
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
            {error && <p>{error}</p>}
        </Box>
    );
};
export default UserInfos;
