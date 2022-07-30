/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user , index }) => {
    
    const makeAdmin = () =>{    
            fetch(`https://damp-brushlands-02493.herokuapp.com/users/admin/${user.email}`,{
                method:"POST",
                headers: {
                    authorization:`breer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res =>{
            console.log(res);
            return res.json()
        })
        .then(data =>{
            toast.success("Success Fully Make Admin")
            console.log(data);
        })
}

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{ user.roll !== "admin" &&
                <button onClick={makeAdmin} className="btn btn-accent btn-sm">Add Admin</button>}
                </td>
            <td><button className="btn btn-accent btn-sm">Delete User</button></td>
        </tr>
    );
};

export default UserRow;