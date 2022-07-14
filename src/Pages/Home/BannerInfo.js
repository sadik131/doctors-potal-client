import React from 'react';

const BannerInfo = ({titel , img ,massage, bgColor}) => {
    return (
        <div className={`card mt-4 shadow-xl ${bgColor}`}>
            <div className="flex mr-3 py-5 px-5">
                <img className='h-20 w-20' src={img} alt="" srcSet="" />
                <p className='mt-5 ml-4'>{titel}</p>
            </div>
                <p className=' mb-2 font-semibold ml-4'>{massage}</p>
        </div>
    );
};

export default BannerInfo;