import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteUser from './DeleteUser';
import DoctorRow from './DoctorRow';

const ManagDoctor = () => {
    const [deleteDoctor, setdeleteDoctor] = useState(null)

    const { data , isLoading ,refetch } = useQuery(["doctors"], () => fetch('https://damp-brushlands-02493.herokuapp.com/doctors').then(res => res.json()))
    
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
                        setdeleteDoctor={setdeleteDoctor}
                        ></DoctorRow>)
                    }
                </tbody>
            </table>
        </div>
        {deleteDoctor && <DeleteUser
        deleteDoctor={deleteDoctor}
        refetch={refetch}
        ></DeleteUser>}
        </div>
    );
};

export default ManagDoctor;