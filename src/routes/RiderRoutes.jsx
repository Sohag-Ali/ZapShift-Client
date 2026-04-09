import React from "react";
import useRole from "../Hooks/useRole";
import useAuth from "../Hooks/useAuth";
import Forbidden from "../components/Forbidden/Forbidden";
import Loading from "../components/Loading/Loading";

const RiderRoutes = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== "rider") {
    return <Forbidden></Forbidden>;
  }
  return children;
};

export default RiderRoutes;
