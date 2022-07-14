import React from 'react';
import peaple1 from "../../assets/images/people1.png";
import peaple2 from "../../assets/images/people2.png";
import peaple3 from "../../assets/images/people3.png";
import TestCard from './TestCard';

const Testimonial = () => {

    const Testimonials = [
        { id: 1, name: "Jone Smith", message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", img: peaple1, country: "Amarica" },
        { id: 2, name: "David Jon", message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", img: peaple2, country: "London" },
        { id: 3, name: "Kuddus Ali", message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", img: peaple3, country: "India" },
    ]

    return (
        <div className='px-10 py-20'>
            <h1 className='text-primary font-medium'>Testimonial</h1>
            <p className='text-2xl'>What Our Patients Says</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    Testimonials.map(test => <TestCard
                        key={test.id}
                        test={test}
                    ></TestCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;