import React from 'react';

const TestCard = ({ test }) => {
    const { name, img, message, country } = test
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{message}</p>
                <div className='flex mt-2'>
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt=""/>
                    </div>
                    <div className='ml-5'>
                        <h1>{name}</h1>
                        <h1>{country}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCard;