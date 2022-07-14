import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const AppointmentBanner = () => {
    return (
        <div>
            <div style={{
                background: `url(${appointment})`
            }} className="card card-side p-5 mt-16 shadow-xl">
                <img className='hidden lg:block h-96' src={doctor} alt="Movie" />
                <div className="mt-10 text-white">
                    <h2 className="card-title text-primary">Appointment</h2>
                    <p className='text-2xl'>Make an appointment Today</p>
                    <p className='p-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente a, id doloribus at quam sunt, aliquid labore odit ipsum modi, em ipsum dolor sit amet consectetur, adipisicing elit. Sapiente a, id doloribus at quam sunt, aliquid labore odit ipsum modi, o optio assumenda quisquam quasi esse ullam aut voluptatem magni voluptate.</p>
                <PrimaryBtn>{"get Start"}</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;