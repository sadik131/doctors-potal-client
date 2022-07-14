import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ tritment, value ,setTritment}) => {
    const { name, slots } = tritment
    const [user] = useAuthState(auth)


    const handelFrom = (event) => {
        event.preventDefault()

        const UserData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phonNumber: event.target.number.value,
            slot: event.target.slot.value,
            tritment: tritment.name,
            date: event.target.date.value
        }
        fetch('http://localhost:5000/appointment', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(UserData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.success){
                    toast(`Successfully Appointment on ${data.message}`)
                    
                }
                else{
                    toast.error(`Already an Appointment on ${data.message.date}`)
                    
                }
                setTritment(null)
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handelFrom} className='mt-2 grid grid-cols-1 gap-3'>
                        <input type="text" name='date' value={value} disabled className='border border-gray-400 w-full py-2 rounded-lg px-2 focus:input-purple-400' />
                        <select name='slot' className="border border-gray-400 w-full py-2 rounded-lg px-2 focus:input-purple-400">
                            {slots.map((slot, index) => <option key={index}>{slot}</option>)}
                        </select>
                        <input type="text" name='name' placeholder='Enter Your Name' className='border border-gray-400 w-full py-2 rounded-lg px-2 focus:input-purple-400' />
                        <input type="text" name="email" value={user.email} disabled className='border border-gray-400 w-full py-2 rounded-lg px-2 focus:input-purple-400' required />
                        <input type="number" name='number' placeholder='Phon Number' className='border border-gray-400 w-full py-2 rounded-lg px-2 focus:input-purple-400' />
                        <input type="submit" value="Submit" className='btn btn-primary w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;