import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { async } from '@firebase/util';
import Loading from '../Shared/Loading';
import useToken from '../Hook/Token';

const SingIn = () => {

    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, PError] = useUpdateProfile(auth);
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

      let errorMessage
      if(error || gError || PError){
        errorMessage=error?.message
      }

      const [token] = useToken(user || gUser)
      useEffect( () =>{
        if(token){
            navigate("/")
          }
      },[token, navigate ])

      if(gLoading || loading){
        <Loading></Loading>
      }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email , data.Password)
        await updateProfile( {displayName : data.name} );
    }
    
    const googleLogin = () =>{
        signInWithGoogle()
    }
    return (
        <div>
            <div className=' flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">Singin</h2>
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("Password", { required: true })}
                                    type="Password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    <span className="label-text-alt text-red-500">{errors.Password?.type === 'required' && " Password fild is requird"}</span>
                                </label>
                                <small className='text-red-500'>{errorMessage}</small>
                                <p className='cursor-pointer'>Forget Password</p>
                            </div>
                            <div>
                                <input className='btn btn-accent w-full' type="submit" value="Signin" />
                                <small className='text-center'>All ready have an account on doctors potal? <Link to="/Login"><span className='text-secondary'>login</span></Link></small  >
                                <div className="divider">OR</div>
                                <button onClick={googleLogin} className='uppercase btn btn-outline w-full'>Continue with google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;