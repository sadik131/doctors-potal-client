import React from 'react';
import { toast } from 'react-toastify';

const DeleteUser = ({deleteDoctor,refetch}) => {
const {name , email} = deleteDoctor

const handelDelete = () =>{
    fetch(`https://damp-brushlands-02493.herokuapp.com/doctors/${email}`,{
        
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
        <div>
            <input type="checkbox" id="delete-user" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Want to Delete doctor: {name}</h3>
                    <p class="py-4">If you delete any one then he doesn't stay the Doctors potal</p>
                    <div class="modal-action">
                        <label for="delete-user" class="btn btn-accent">Cansel</label>
                        <label onClick={() =>handelDelete(email)} for="delete-user" class="btn btn-accent">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;