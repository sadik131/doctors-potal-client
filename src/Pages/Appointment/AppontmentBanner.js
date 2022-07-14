import React from 'react';
import Calendar from 'react-calendar';
import chare from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import 'react-calendar/dist/Calendar.css';


const AppontmentBanner = ({ value, onChange }) => {
    // const [value, onChange] = useState(new Date());
    return (
        <div >
            <div style={{
                background: `url(${bg})`
            }} className="block md:flex justify-between p-5">
                <div>
                    <Calendar onChange={onChange} value={value} />
                </div>
                <div>
                    <img className='mt-2 h-full w-96' src={chare} alt="" srcSet="" />
                </div>
            </div>
            <p className='text-center text-primary'>Avalable Appointment On {value.toString()}</p>

        </div>
    );
};

export default AppontmentBanner;