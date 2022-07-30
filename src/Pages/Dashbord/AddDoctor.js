import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';



const AddDoctor = () => {

    const imgbbKey="368c33814be9653fe3277b819a7b9bc8";
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`

    const [sarvise, setSarvise] = useState([])
    useEffect(() => {
        fetch('https://damp-brushlands-02493.herokuapp.com/Sname')
            .then(res => res.json())
            .then(data => setSarvise(data))
    }, [])


    const { register, formState: { errors }, handleSubmit , reset } = useForm();
    const onSubmit = async (data) => {
        const image = data.file[0]
        const formData = new FormData();
        formData.append('image', image);

        fetch(url , {
            method:"POST",
           body:formData
        })
        .then(res =>res.json())
        .then(result => {
            if(result.success){
                const doctorInfo = {
                    img: result.data.url,
                    name: data.name,
                    email:data.email,
                    speciality:data.speciality
                }
                fetch('https://damp-brushlands-02493.herokuapp.com/doctors' ,{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(doctorInfo)
                })
                .then(res =>res.json())
                .then(doctor =>{
                    if(doctor.insertedId){
                        toast.success(`Doctor:${doctorInfo.name} successfull added`)
                        reset()
                    }
                })
            }
        })
    }

    return (
        <div>
            <h1 className='text-2xl'>Add A Doctor</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        {...register("name", { required: true })}
                        type="name"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-500">{errors.name?.type === 'required' && " Name fild is requird"}</span>
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-500">{errors.email?.type === 'required' && " Email fild is requird"}</span>
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register("speciality")} className="input input-bordered w-full max-w-xs" >
                        {
                            sarvise?.map(sarvis => <option key={sarvis._id}>{sarvis.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        {...register("file", { required: true })}
                        type="file"
                        placeholder="file"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-500">{errors.file?.type === 'required' && " file fild is requird"}</span>
                    </label>
                </div>
                <div>
                    <input className='btn btn-accent w-1/2' type="submit" value="Add " />
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;