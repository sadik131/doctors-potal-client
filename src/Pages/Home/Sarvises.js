import React from 'react';
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import fluoride from "../../assets/images/fluoride.png"
import Sarvise from './Sarvise';

const Sarvises = () => {

    const sarvises = [
        {id: 1 , img: cavity , name:"Cavity Filling", massage:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"},
        {id: 2 , img: whitening , name:"theet whitening", massage:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"},
        {id: 3 , img: fluoride , name:"Fluoride Treatment", massage:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"},
    ]

    return (
        <div>
            <h1 className='text-center font-bold text-base text-primary'>Our Sarvises</h1>
            <h2 className='text-center text-4xl font-normal'>Sarvise We Provide</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
                {
                    sarvises.map(sarvise=><Sarvise
                    key={sarvise.id}
                    sarvise={sarvise}
                    ></Sarvise>)
                }
            </div>
        </div>
    );
};

export default Sarvises;