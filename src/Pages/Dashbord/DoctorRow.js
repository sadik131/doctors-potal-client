import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index , refetch}) => {
    const { name, email, img, speciality } = doctor

    const handelDelete = () =>{
        fetch(`http://localhost:5000/doctors/${email}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            },
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.deletedCount){
           toast.success("Doctor Delete SuccessFully")
            refetch()
            }
        })
    }
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
            <td><button onClick={handelDelete} className="btn btn-xs btn-error">Delete</button>
            </td>
        </tr>
    );
};

export default DoctorRow;