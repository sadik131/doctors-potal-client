import React, { useState } from 'react';
import { useEffect } from 'react';
import UserRow from './userRow';

const User = () => {

    const [users , setUser] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/user' ,{
            headers:{
                "authorization":`Breer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res =>{
            console.log(res);
            return res.json()
        })
        .then(data => {
            setUser(data);
        })
    },[])

    return (
        <div>
            <h1 className="text-2xl">My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user , index) =><UserRow
                            key={user._id}
                            user={user}
                            index={index}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;