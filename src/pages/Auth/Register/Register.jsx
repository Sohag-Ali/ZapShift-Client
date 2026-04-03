import React from "react";
import { Form, useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocailLogin from "../SocailLogin/SocailLogin";
import axios from "axios";
import { FiUpload } from "react-icons/fi";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleRegistration = (data) => {
    console.log(data);
    const profileImage = data.photo[0];
    registerUser(data.email, data.password, data.name)
      .then((result) => {
        const user = result.user;
       
        console.log(user);
        // Upload profile image
        // ...
        const formData = new FormData();
        formData.append("image", profileImage);

        const imageAPIURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;
        axios.post(imageAPIURL, formData).then((res) => {
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };

          updateUserProfile(userProfile)
            .then(() => {
              console.log("User profile updated successfully");
               navigate(location.state || '/');
            })
            .catch((error) =>
              console.log("Error updating user profile:", error),
            );
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-1">Create an Account</h2>
      <p className="text-gray-500 text-sm mb-6">Register with ZapShift</p>

      {/* Form */}
      <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
        <div className="flex flex-col items-center mb-4">
          {/* Hidden File Input */}
          <input
            type="file"
            id="photoUpload"
            {...register("photo", { required: true })}
            className="hidden"
          />

          {/* Avatar Upload */}
          <label
            htmlFor="photoUpload"
            className="relative w-16 h-16 rounded-full  flex items-center justify-center cursor-pointer bg-gray-200 hover:bg-gray-200 transition"
          >
            {/* User Icon */}
            <span className="text-gray-400 text-2xl">👤</span>

            {/* Upload Icon (bottom right) */}
            <div className="absolute bottom-0 right-0 bg-lime-400 rounded-full p-1">
              <FiUpload className="text-white text-xs" />
            </div>
          </label>

          {/* Helper Text */}
          <p className="text-[10px] text-gray-400 mt-2">Upload Photo</p>

          {/* Error */}
          {errors.photo?.type === "required" && (
            <p className="text-xs text-red-500 mt-2">Photo is required</p>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="text-xs text-gray-600">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#eeeeee] text-sm focus:outline-none focus:ring-1 focus:ring-lime-400"
          />

          {errors.name?.type === "required" && (
            <p className="text-xs text-red-500 mt-1">Name is required</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-xs text-gray-600">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#eeeeee] text-sm focus:outline-none focus:ring-1 focus:ring-lime-400"
          />
          {errors.email?.type === "required" && (
            <p className="text-xs text-red-500 mt-1">Email is required</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-xs text-gray-600">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
            placeholder="Password"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#eeeeee] text-sm focus:outline-none focus:ring-1 focus:ring-lime-400"
          />
          {errors.password?.type === "required" && (
            <p className="text-xs text-red-500 mt-1">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-xs text-red-500 mt-1">
              Password must be at least 6 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-xs text-red-500 mt-1">
              Password must contain uppercase, lowercase, number, and special
              character
            </p>
          )}
        </div>

        {/* Button */}
        <button className="w-full bg-lime-400 hover:bg-lime-500 py-2 rounded-md text-sm font-semibold">
          Register
        </button>

        {/* Login */}
        <p className="text-xs text-gray-400 text-center">
          Already have an account?{" "}
          <Link state={location.state} to="/login" className="text-lime-500 cursor-pointer">
            Login
          </Link>
        </p>

        <SocailLogin></SocailLogin>
      </form>
    </div>
  );
};

export default Register;
