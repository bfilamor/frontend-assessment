import React from 'react'
import { Banner } from '../components/Banner';
import { DataSection } from '../components/DataSection';
import { Highlights } from '../components/highlights/Highlights';

export const Home = () => {
    const bannerData = {
        title: "Hello Developer!",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desktopBanner: "https://via.placeholder.com/1920x650",
        mobileBanner: "https://via.placeholder.com/600x600"
    }
    return (
        <>
            <Banner bannerData={bannerData} />
            <Highlights/>
            <DataSection />
        </>
    )
}
