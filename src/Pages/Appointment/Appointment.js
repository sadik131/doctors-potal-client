import React, { useState } from 'react';
import Appointments from './Appointments';
import AppontmentBanner from './AppontmentBanner';

const Appointment = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <AppontmentBanner
            value={value}
            onChange={onChange}
            ></AppontmentBanner>
            <Appointments
            value={value}
            ></Appointments>
        </div>
    );
};

export default Appointment;