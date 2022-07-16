import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManagDoctor = () => {

    const { data , isLoading ,refetch } = useQuery(["doctors"], () => fetch('http://localhost:5000/doctors').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl text-purple-400'>Manage Doctor: {data?.length}</h1>
            <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Speciality</th>
                        <th>Delete Doctor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((doctor , index) =><DoctorRow
                        key={doctor._id}
                        doctor={doctor}
                        index={index}
                        refetch={refetch}
                        ></DoctorRow>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ManagDoctor;