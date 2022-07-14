import React from 'react';
import chare from '../../assets/images/chair.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Banner = ({Children}) => {
    return (
        <div>
            <div className="card lg:card-side  px-10 py-20 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Your New Smile Starts Here</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <div className="card-actions">
                        <PrimaryBtn>{"Get Start"}</PrimaryBtn>
                    </div>
                </div>
                <div><img className='w-full' src={chare} alt="Album" /></div>
            </div>
        </div>
    );
};

export default Banner;