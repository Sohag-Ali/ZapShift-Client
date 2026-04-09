import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const AssignDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=driver_assigned`,
      );
      return res.data;
    },
  });

  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = {
      deliveryStatus: status
    };

    let statusMessage = `Parcel Status Updated with ${status.split('_').join(' ')}`;


    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: statusMessage,
            showCancelButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">
        parcels pending pickup : {parcels.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Confrimation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {parcel.deliveryStatus === "driver_assigned" ? 
                    <>
                      <button
                        onClick={() => handleDeliveryStatusUpdate(parcel,'rider_arriving')}
                        className="btn btn-primary"
                      >
                        Accept
                      </button>
                      <button className="btn btn-secondary">Reject</button>
                    </>
                    : <span className="text-green-500 font-semibold">Accepted</span>
                   
                  }
                </td>
                <td>
                  <button
                  onClick={() => handleDeliveryStatusUpdate(parcel,'parcel_picked_up')} className="btn btn-info">Mark as pickup</button>
                  <button
                  onClick={() => handleDeliveryStatusUpdate(parcel,'parcel_delivered')} className="btn btn-info mx-2">Mark as delivery</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignDeliveries;
