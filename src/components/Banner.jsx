import  { useEffect, useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, ListIcon, Image, Box, Text, ListItem, List } from "@chakra-ui/react";
import { Banners } from "../data/Banners";
import img from "../assets/how.png";
import { Link } from "react-router-dom";
import { BiCheckCircle } from "react-icons/bi";

function Banner() {
    const [bannerImage, setBannerImage] = useState(null);
    const [bannerTitle, setBannerTitle] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        async function fetchBannerData() {
            const randomIndex = Math.floor(Math.random() * Banners.length);
            const banner = await Banners[randomIndex].img;
            const title = await Banners[randomIndex].title;
            setBannerImage(banner.default); 
            setBannerTitle(title);
        }
        fetchBannerData();
    }, []);

    return (
        <div className="relative w-full h-96 border overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${bannerImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed", 
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white shadow-md p-6 rounded-lg text-center text-gray-800">
                    <h1 className="text-3xl font-bold mb-4">{bannerTitle}</h1>
                    <Link to="/products" >
                    <Button colorScheme="teal" size="lg" className="mb-4">
                        Get Started Now!
                    </Button>
                    </Link>

                    <p className="text-sm text-cyan-700 cursor-pointer underline" onClick={onOpen}>
                        Learn how it works
                    </p>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>How It Works</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={img} alt="How It Works" borderRadius="md"  className="w-52" mx="auto" mb={4} />
                        <Box mb={4}>
                            <Text fontSize="lg" mb={2}>
                                Welcome to MarketFolio! Here you can sell items and meet with buyers or sellers in person. Simply list your item, communicate with interested parties, and arrange a meeting to complete the transaction.
                            </Text>
                            <Text fontSize="lg" mb={2}>Steps to get started:</Text>
                        </Box>
                        <List spacing={3} styleType="disc">
                            <ListItem>
                                <ListIcon as={BiCheckCircle} color="teal.500" />
                                Create an account or log in.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheckCircle} color="teal.500" />
                                List your items for sale with detailed descriptions and images.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheckCircle} color="teal.500" />
                                Communicate with buyers or sellers through our messaging system.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheckCircle} color="teal.500" />
                                Arrange a safe and convenient meeting place to exchange the items.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheckCircle} color="teal.500" />
                                Complete the transaction and leave feedback for the other party.
                            </ListItem>
                        </List>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="teal" onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Banner;
