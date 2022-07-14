import React from 'react';
import img from '../../assets/images/treatment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const SarviseBanner = () => {
    return (
        <div>
            <div className="card p-5 mt-10 card-side shadow-xl">
               <img className='hidden md:block w-96 h-96 ml-40' src={img} alt="tritment"/>
                <div className="card-body">
                    <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam et, ut dolores culpa quibusdam tenetur cupiditate voluptas perspiciatis fugit delectus ea commodi libero! Rem aspernatur consequatur temporibus fugiat modi accusamus, optio non soluta excepturi est natus ab earum commodi vitae aut ea sunt dignissimos provident! Laborum reiciendis id a.</p>
                    <PrimaryBtn>{"get start"}</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default SarviseBanner;