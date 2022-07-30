import React from 'react';
import Ul from '../Dashbord/ul';
import AppointmentBanner from './AppointmentBanner';
import Banner from './Banner';
import BannerCard from './BannerCard';
import Contact from './Contact';
import SarviseBanner from './SarviseBanner';
import Sarvises from './Sarvises';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <Sarvises></Sarvises>
            <SarviseBanner></SarviseBanner>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;