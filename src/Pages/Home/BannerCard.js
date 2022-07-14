import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import BannerInfo from './BannerInfo';

const BannerCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
            <BannerInfo titel="Opening Hours" massage="Brooklyn, NY 10036, United States" img={clock} bgColor="bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] "></BannerInfo>
            <BannerInfo titel="Visit our location" massage="Brooklyn, NY 10036, United States" img={marker} bgColor="bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] "></BannerInfo>
            <BannerInfo titel="Contact us now" massage="Brooklyn, NY 10036, United States" img={phone} bgColor="bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] "></BannerInfo>
        </div>
    );
};

export default BannerCard;