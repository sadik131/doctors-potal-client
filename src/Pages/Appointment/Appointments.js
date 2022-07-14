import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AppontCard from './AppontCard';
import BookingModal from './BookingModal';

const Appointments = ({value}) => {
    const [datas, useDatas] = useState([])
    const [tritment, setTritment] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/sarvises')
            .then(res => res.json())
            // eslint-disable-next-line react-hooks/rules-of-hooks
            .then(data => useDatas(data))
    }, [])
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {datas.map(data => <AppontCard
                    key={data._id}
                    data={data}
                    setTritment={setTritment}
                ></AppontCard>)}
            </div>
            <div>
              {tritment && <BookingModal value={value} setTritment={setTritment} tritment={tritment}></BookingModal>}
            </div>
        </>
    );
};

export default Appointments;