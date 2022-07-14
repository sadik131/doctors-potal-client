import React from 'react';

const AppontCard = ({ data, setTritment }) => {
    const { name, slots } = data
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title  text-secondary">{name}</h2>
                    <p className=''>{slots[0]}{slots.length === 0 ? "No Slots Avalable Now" : ''}</p>
                    <p className=''>Avalable {slots.length === 0 ? " slot" : "slots"} on {slots.length}</p>
                    <div className="justify-center">
                        <label
                        onClick={() => setTritment(data)}
                        disabled={slots.length === 0 }
                            htmlFor="booking-modal"
                            className="btn btn-secondary modal-button">Buy Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppontCard;