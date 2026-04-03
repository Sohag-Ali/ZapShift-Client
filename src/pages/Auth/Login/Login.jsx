import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocailLogin from '../SocailLogin/SocailLogin';



const Login = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const { signInUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = (data) => {
        console.log(data);
        signInUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(location?.state || '/');
        }   )
        .catch(error => console.log(error))
    };

    return (
      <div className="max-w-sm">

            {/* Title */}
            <h2 className="text-3xl font-bold mb-1">Welcome Back</h2>
            <p className="text-gray-500 text-sm mb-6">
                Login with ZapShift
            </p>

            <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

                {/* Email */}
                <div>
                    <label className="text-xs text-gray-600">Email</label>
                    <input
                        type="email"
                        {...register("email", {required: true })}
                        placeholder="Email"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#f0f0f0] text-sm focus:outline-none"
                    />
                    {errors.email?.type === "required" && <p className="text-xs text-red-500 mt-1">Email is required</p>}
                </div>

                {/* Password */}
                <div>
                    <label className="text-xs text-gray-600">Password</label>
                    <input
                        type="password"
                            {...register("password", {required: true , minLength: 6 })}
                        placeholder="Password"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#f0f0f0] text-sm focus:outline-none"
                    />
                    {errors.password?.type === "required" && <p className="text-xs text-red-500 mt-1">Password is required</p>}
                    {errors.password?.type === "minLength" && <p className="text-xs text-red-500 mt-1">Password must be at least 6 characters</p>}
                </div>

                {/* Forgot */}
                <p className="text-xs text-gray-400 cursor-pointer">
                    Forgot Password?
                </p>

                {/* Login Button */}
                <button className="w-full bg-lime-400 hover:bg-lime-500 py-2 rounded-md text-sm font-semibold">
                    Login
                </button>

                {/* Register */}
                <p className="text-xs text-gray-400">
                    Don’t have any account?{" "}
                    <Link state={location.state} to="/register" className="text-lime-500 cursor-pointer">Register</Link>
                </p>

               

                <SocailLogin></SocailLogin>

            </form>
        </div>
    );
};



export default Login;