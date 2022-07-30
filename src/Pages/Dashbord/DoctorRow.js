import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index , refetch ,setdeleteDoctor}) => {
    const { name, email, img, speciality } = doctor

    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{speciality}</td>
            <td>
            <label
             onClick={() =>setdeleteDoctor(doctor)} 
             for="delete-user" 
             class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;