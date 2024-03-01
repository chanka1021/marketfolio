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
        <div className='relative w-full h-96 border'>
            <div className="absolute inset-0" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 md:px-60 md:py-10 items-center max-sm:justify-center flex">
                <div className="w-96 h-72 bg-white shadow-sm md:p-10 max-sm:w-72 max-sm:h-56 p-5 shadow-slate-200">
                    <h1 className="text-3xl max-sm:text-xl font-bold">{bannerTitle}</h1>
                    <Button className="mt-5" colorScheme="teal" size="lg">
                        Get Started Now!
                    </Button>
                    <p className="cursor-pointer text-sm text-cyan-700 mt-2 underline">Learn how it works</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;