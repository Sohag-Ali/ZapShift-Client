import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const Parcel = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionDplicate = serviceCenters.map((center) => center.region);
  const regions = [...new Set(regionDplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(
      (center) => center.region === region,
    );
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);

    const isDocument = data.parcelType === "document";
    console.log(isDocument);
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;

    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    console.log("Calculated Cost:", cost);
    data.cost = cost;

    Swal.fire({
      title: "Agree to Pay",
      text: `The total cost for sending this parcel is ${cost} BDT. Do you want to proceed?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm and Continue Payment !",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after data", res.data);
          if (res.data.insertedId) {
            navigate("/dashboard/my-parcels");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Parcel has created. Please Pay",
              showConfirmButton: false,
              timer: 2500
            });
          }
        });

      Swal.fire({
        title: "Parcel Send Cancel!",
        text: "Your parcel has been sent Fail.",
        icon: "fail",
      });
    });
  };
  return (
    <div className="p-4 md:p-8">
      {/* Outer Container */}
      <div className="bg-white rounded-md p-4 md:p-8 shadow-md">
        {/* Title */}
        <div className="px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Send A Parcel</h2>
          <p className="text-gray-600 mb-6">Enter your parcel details</p>
        </div>

        {/* Inner Box */}
        <form onSubmit={handleSubmit(handleSendParcel)}>
          <div className="rounded-md p-4 md:p-6">
            {/* Parcel Type */}
            <div className="flex gap-6 mb-4 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("parcelType")}
                  value="document"
                  defaultChecked
                  className="accent-lime-500"
                />
                Document
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("parcelType")}
                  value="not-document"
                  className="accent-lime-500"
                />
                Not-Document
              </label>
            </div>

            {/* Parcel Info */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs text-gray-600">Parcel Name</label>
                <input
                  type="text"
                  {...register("parcelName")}
                  placeholder="Parcel Name"
                  className="w-full mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs text-gray-600">
                  Parcel Weight (KG)
                </label>
                <input
                  type="text"
                  {...register("parcelWeight")}
                  placeholder="Parcel Weight (KG)"
                  className="w-full mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                />
              </div>
            </div>

            {/* Sender & Receiver */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sender */}
              <div>
                <h4 className="font-semibold mb-2">Sender Details</h4>

                <label className="text-xs text-gray-600">Sender Name</label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  {...register("senderName")}
                  defaultValue={user?.displayName}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                />

                <label className="text-xs text-gray-600">Sender Email</label>
                <input
                  placeholder="Sender Email"
                  type="email"
                  {...register("senderEmail")}
                  defaultValue={user?.email}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                />

                <label className="text-xs text-gray-600">Address</label>
                <input
                  placeholder="Address"
                  type="text"
                  {...register("senderAddress")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                />

                <label className="text-xs text-gray-600">Sender Phone No</label>
                <input
                  placeholder="Sender Phone No"
                  type="tel"
                  {...register("senderPhone")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                />

                <label className="text-xs text-gray-600">Region</label>
                <select
                  {...register("senderRegion")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                >
                  <option>Select your Region</option>
                  {regions.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>

                <label className="text-xs text-gray-600">District</label>
                <select
                  {...register("senderDistrict")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                >
                  <option>Select your District</option>
                  {districtsByRegion(senderRegion).map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>

                <label className="text-xs text-gray-600">
                  Pickup Instruction
                </label>
                <textarea
                  placeholder="Pickup Instruction"
                  type="text"
                  {...register("pickupInstruction")}
                  className="w-full mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                ></textarea>
              </div>

              {/* Receiver */}
              <div>
                <h4 className="font-semibold mb-2">Receiver Details</h4>

                <label className="text-xs text-gray-600">Receiver Name</label>
                <input
                  placeholder="Receiver Name"
                  type="text"
                  {...register("receiverName")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                />

                <label className="text-xs text-gray-600">Receiver Email</label>
                <input
                  placeholder="Receiver Email"
                  type="email"
                  {...register("receiverEmail")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                />

                <label className="text-xs text-gray-600">Address</label>
                <input
                  placeholder="Address"
                  type="text"
                  {...register("receiverAddress")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                />

                <label className="text-xs text-gray-600">
                  Receiver Contact No
                </label>
                <input
                  placeholder="Receiver Contact No"
                  type="tel"
                  {...register("receiverContact")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                />

                <label className="text-xs text-gray-600">Region</label>
                <select
                  {...register("receiverRegion")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                >
                  <option>Select your Region</option>
                  {regions.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>

                <label className="text-xs text-gray-600">District</label>
                <select
                  {...register("receiverDistrict")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                >
                  <option>Select your District</option>
                  {districtsByRegion(receiverRegion).map((d, index) => (
                    <option key={index} value={d}>
                      {d}
                    </option>
                  ))}
                </select>

                <label className="text-xs text-gray-600">
                  Delivery Instruction
                </label>
                <textarea
                  placeholder="Delivery Instruction"
                  type="text"
                  {...register("deliveryInstruction")}
                  className="w-full mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-lime-400 focus:bg-white"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <p className="text-xs text-gray-500 mt-4 ">
              * PickUp Time 4pm-7pm Approx.
            </p>

            <button className="mt-4 bg-lime-400 hover:bg-lime-500 px-6 py-2 rounded-md text-sm font-semibold">
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Parcel;
