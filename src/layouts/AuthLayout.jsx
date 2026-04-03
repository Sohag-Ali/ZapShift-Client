import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/as/authImage.png';

const AuthLayout = () => {
    return (
            <div className="bg-[#f3f4f6] min-h-screen">

            {/* 🔹 NAVBAR */}
            {/* <div className="max-w-7xl mx-auto px-4 py-4">
                <Logo />
            </div> */}

            {/* 🔹 MAIN CONTENT */}
            <div className="max-w-7xl mx-auto py-4">
                
                <Logo />
            

                <div className="flex rounded-md overflow-hidden">

                    {/* LEFT SIDE */}
                    <div className="w-1/2 bg-[#f5f5f5] px-16 py-12">

                        <Outlet />

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-1/2 bg-[#e7ecd7] flex items-center justify-center">
                        <img
                            src={authImage}
                            alt="auth"
                            className="w-[60%]"
                        />
                    </div>

                </div>

            </div>
        </div>
    );
};


export default AuthLayout;