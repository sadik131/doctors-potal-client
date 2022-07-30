import React, { useState } from 'react';
import { useEffect } from 'react';
import UserRow from './userRow';

const User = () => {

    const [users , setUser] = useState([])
    useEffect( () =>{
        fetch('https://damp-brushlands-02493.herokuapp.com/user' ,{
            
            headers:{
                "authorization":`Breer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res =>{
            
            return res.json()
        })
        .then(data => {
            setUser(data)
        })
    },[users])

    return (
        <div>
            <h1 className="text-2xl">Our Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
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