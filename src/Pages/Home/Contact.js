import React from 'react';
import background from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const Contact = () => {
    return (
        <div style={{
            background:`url(${background})`
        }} className='text-center py-10'>
            <h1 className='text-primary'>Contact us</h1>
            <h1 className='text-3xl text-white'>Stay connected with us</h1>
            <div className='flex justify-center'>
                <form>
                    <input type="email" placeholder='Enter Your Email' className='block py-1 pl-2 pr-10 mt-2 rounded-md  input-primary focus:input-primary' />
                    <input type="text" placeholder='Subject' className='block py-1 pr-10 mt-2 pl-2 rounded-md input-primary focus:input-primary' />
                    <textarea placeholder='Enter Your Subject' className='block pl-2 pr-10 mt-2 rounded-md' name="text" id="" cols="22" rows="5"></textarea>
                    <input className='btn bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white w-full mt-1' type="submit" value="Submit" />
                    {/* <div className='mt-5'>
                    <PrimaryBtn>{"submit"}</PrimaryBtn>
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default Contact;