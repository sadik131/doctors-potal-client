/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../Hook/Token';
import Loading from '../Shared/Loading';


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const { register, formState: { errors }, handleSubmit } = useForm();

      let errorMessage;
      if(gError || error){
        errorMessage = error?.message
      }

      if(loading || gLoading){
         <Loading></Loading>
      }
      const [token] = useToken(user || gUser)

      let from = location.state?.from?.pathname || "/";
      useEffect( () =>{
        if(token){
            navigate(from, { replace: true });
          }
          
      } ,[token, navigate , from])

    
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email , data.Password)
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-medium text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                                <span className="label-text-alt text-red-500">{errors.email?.type === 'required' && " email fild is requird"}</span>
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
                            <small className='text-red-500'>{errorMessage}</small>
                            <p className='cursor-pointer'>Forget Password</p>
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.Password?.type === 'required' && " Password fild is requird"}</span>
                            </label>
                        </div>
                        <input className='btn btn-accent w-full' type="submit" value="Login"/>
                        <small className='text-center'>New to doctors potal? <Link to="/singin"><span className='text-secondary'>Create New Acoount</span></Link></small  >
                    </form>
                        <div className="divider">OR</div>
                        <button onClick={()=>signInWithGoogle()} className='uppercase btn btn-outline w-full'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;