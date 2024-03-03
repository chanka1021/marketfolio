import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Banners } from "../data/Banners";

function Banner() {
    const [bannerImage, setBannerImage] = useState(null);
    const [bannerTitle, setBannerTitle] = useState(null);

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
                        backgroundAttachment: "fixed", // 
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white shadow-md p-6 rounded-lg text-center text-gray-800">
                    <h1 className="text-3xl font-bold mb-4">{bannerTitle}</h1>
                    <Button colorScheme="teal" size="lg" className="mb-4">
                        Get Started Now!
                    </Button>
                    <p className="text-sm text-cyan-700 cursor-pointer underline">
                        Learn how it works
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
