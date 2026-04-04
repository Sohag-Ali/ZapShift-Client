import axios from 'axios';
import React from 'react';

const asioxSecure = axios.create({
    baseURL: 'http://localhost:3000',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
});
const useAxiosSecure = () => {

    return asioxSecure;
};

export default useAxiosSecure;