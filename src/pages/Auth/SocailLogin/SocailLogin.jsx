import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const SocailLogin = () => {
  const { signinUserWithGoogle } = useAuth();
  const location = useLocation();
  const axiosSequre = useAxiosSecure();
  const navigate = useNavigate();
  console.log(location);

  const handleGoogleSignIn = () => {
    signinUserWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        

        const userInfo = {
          email: user.email,
          displayName: user.name,
          photoURL:user.photoUrl,
        };

        axiosSequre.post('/users',userInfo)
        .then(res => {
            console.log("user data has been stored", res.user)
            navigate(location?.state || "/");
        })
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="space-y-4">
      {/* Divider */}
      <div className="text-center text-gray-300 text-sm ">Or</div>

      {/* Google */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full bg-gray-200 py-2 rounded-md flex items-center justify-center gap-2 text-sm"
      >
        <img src="https://img.icons8.com/color/16/google-logo.png" alt="" />
        Login with google
      </button>
    </div>
  );
};

export default SocailLogin;
