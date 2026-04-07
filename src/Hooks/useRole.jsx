import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure/useAxiosSecure';

const useRole = () => {
    const {user} = useAuth();
    const axiosSequre = useAxiosSecure();
    const {isLoading: roleLoading , data: role = 'user'} = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: async () => {
            const res = await axiosSequre.get(`/users/${user.email}/role`);
            return res.data?.role || 'user';
        }
    })
    return {role, roleLoading};
};

export default useRole;