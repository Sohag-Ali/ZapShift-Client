import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      const data = await res.data;
      return data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log("Parcel ID:", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure
          .delete(`/parcels/${id}`)
          .then((res) => {
            console.log("Delete Response:", res);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("Error deleting parcel:", error);
            Swal.fire(
              "Error!",
              "There was an issue deleting the parcel.",
              "error",
            );
          });

      // Swal.fire({
      //   title: "Deleted!",
      //   text: "Your file has been deleted.",
      //   icon: "success",
      // });
    });
  };

  const handlePayment = async(parcel) => {
    console.log("click")
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
      trackingId: parcel.trackingId
    }
    const res = await axiosSecure.post('/payment-checkout-session',paymentInfo);
    console.log(res.data);
    window.location.assign(res.data.url);
  };

  return (
    <div>
      <h2>My Parcels : {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Tracking Id</th>
              <th>Delivery Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-green-400">Paid</span>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-primary btn-sm"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>
                  <Link to={`/parcel-track/${parcel.trackingId}`}>
                    {parcel.trackingId}
                  </Link>
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-secondary btn-sm ml-2"
                  >
                    Delete
                  </button>
                  <button className="btn btn-success btn-sm ml-2">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
