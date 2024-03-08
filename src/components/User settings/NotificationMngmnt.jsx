import React, { useState } from 'react';
import { Switch, Box, Heading, Text } from '@chakra-ui/react';

const Notification = ({ title, description, isChecked, onChange,isDisabled }) => {
    return (
        <div className="mt-4 flex">
            <Switch isChecked={isChecked} onChange={onChange} isDisabled={isDisabled} />
            <Box ml="4">
            <Heading as="h3" size="sm">{title}</Heading>
            <Text mt="1" fontSize="sm">{description}</Text>
            </Box>
        </div>
    );
};

const NotificationMngmnt = () => {
    const [notifications, setNotifications] = useState({
        notification1: false,
        notification2: false,
        notification3: false,
        notification4: false,
    });

    const handleNotificationChange = (notification) => {
        setNotifications(prevState => ({
            ...prevState,
            [notification]: !prevState[notification],
        }));
    };

    const { notification1, notification2, notification3, notification4 } = notifications;

    return (
        <div className='pl-5'>
            <Notification
                title="Account Management Emails"
                description="Email relating to your account such as password recovery…"
                isChecked={true}
                isDisabled = {true}
                onChange={() => handleNotificationChange('notification1')}
            />
            <Notification
                title="Announcement Emails"
                description="Email sent each time the status of your ads changes."
                isChecked={notification2}
                onChange={() => handleNotificationChange('notification2')}
            />
            <Notification
                title="Emails pack"
                description="Email sent to the application of each pack."
                isChecked={notification3}
                onChange={() => handleNotificationChange('notification3')}
            />
            <Notification
                title="Newsletters"
                description="Email relating to offers and promotions and also Marketplace news"
                isChecked={notification4}
                onChange={() => handleNotificationChange('notification4')}
            />
        </div>
    );
};

export default NotificationMngmnt;
