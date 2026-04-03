import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import SocailLogin from '../SocailLogin/SocailLogin';

const Register = () => {

    const {register , handleSubmit ,formState:{errors}} = useForm();
    const { registerUser } = useAuth();

    const handleRegistration = (data) => {
        console.log(data);
        registerUser(data.email, data.password, data.name)
        .then(result => {
            const user = result.user;
            console.log(user);
        }   )
        .catch(error => console.log(error)) 
    };
    return (
         <div className="w-full max-w-sm mx-auto">

            {/* Title */}
            <h2 className="text-3xl font-bold mb-1">
                Create an Account
            </h2>
            <p className="text-gray-500 text-sm mb-6">
                Register with ZapShift
            </p>

            {/* Avatar Upload */}
            <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                    <span className="text-xl">👤</span>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">

                {/* Name */}
                <div>
                    <label className="text-xs text-gray-600">Name</label>
                    <input
                        type="text"
                        {...register("name", {required: true })}
                        placeholder="Enter Your Name"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#eeeeee] text-sm focus:outline-none focus:ring-1 focus:ring-lime-400"
                    />
                   { errors.name?.type === "required" && <p className="text-xs text-red-500 mt-1">Name is required</p>}    
                </div>

                {/* Email */}
                <div>
                    <label className="text-xs text-gray-600">Email</label>
                    <input
                        type="email"
                        {...register("email", {required: true })}
                        placeholder="Email"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#eeeeee] text-sm focus:outline-none focus:ring-1 focus:ring-lime-400"
                    />
                    {errors.email?.type === "required" && <p className="text-xs text-red-500 mt-1">Email is required</p>}
                </div>

                {/* Password */}
                <div>
                    <label className="text-xs text-gray-600">Password</label>
                    <input
                        type="password"
                        {...register("password", {required: true, minLength: 6,pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/ })}
                       
                        placeholder="Password"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#eeeeee] text-sm focus:outline-none focus:ring-1 focus:ring-lime-400"
                    />
                    {errors.password?.type === "required" && <p className="text-xs text-red-500 mt-1">Password is required</p>}
                    {errors.password?.type === "minLength" && <p className="text-xs text-red-500 mt-1">Password must be at least 6 characters</p>}
                    {errors.password?.type === "pattern" && <p className="text-xs text-red-500 mt-1">Password must contain uppercase, lowercase, number, and special character</p>}
                </div>

                {/* Button */}
                <button className="w-full bg-lime-400 hover:bg-lime-500 py-2 rounded-md text-sm font-semibold">
                    Register
                </button>

                {/* Login */}
                <p className="text-xs text-gray-400 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-lime-500 cursor-pointer">Login</Link>
                </p>

                

               <SocailLogin></SocailLogin>

            </form>
        </div>
    );
};


export default Register;