import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "../useAuth";
import { useNavigate } from "react-router";

const asioxSecure = axios.create({
  baseURL: "http://localhost:3000",
  // headers: {
  //     'Content-Type': 'application/json',
  // },
});
const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    //intercept request
    const reqInterceptor = asioxSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
      return config;
    });

    const resInterceptor = asioxSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        const statusCode = error.status;
        if(statusCode === 401 || statusCode === 403){
            signOutUser()
            .then(() => {
                navigate('/login')
            })
        }
        return Promise.reject(error);
      },
    );

    return () => {
      asioxSecure.interceptors.request.eject(reqInterceptor);
      asioxSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user]);

  return asioxSecure;
};

export default useAxiosSecure;
