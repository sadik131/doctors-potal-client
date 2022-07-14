import React from 'react';

const Sarvise = ({sarvise}) => {
    // {img , name , massage} = sarvise
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl">
                <img className='h-28 w-28 mx-auto' src={sarvise.img} alt={sarvise.name} />
                <div className="card-body text-center">
                    <h2 className="text-center font-semibold">{sarvise.name}</h2>
                    <p className='font-normal'>{sarvise.massage}</p>
                </div>
            </div>
        </div>
    );
};

export default Sarvise;