import React from "react";
import riderImg from "../../assets/as/agent-pending.png";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm();
  const { user } = useAuth();
  //   const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();

  const regionDplicate = serviceCenters.map((center) => center.region);
  const regions = [...new Set(regionDplicate)];
  const riderRegion = useWatch({ control, name: "riderRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(
      (center) => center.region === region,
    );
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post('/riders', data)
    .then(res => {
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your appication has been submitted.",
                showCancelButton: false,
                timer: 2000
            })
        }
    })
  };

  return (
    <div className="p-4 md:p-8">
      {/* Container */}
      <div className="bg-white rounded-xl shadow-md p-4 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Be a Rider</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT FORM */}
          <form
            onSubmit={handleSubmit(handleRiderApplication)}
            className="flex flex-col gap-3 w-full order-2 lg:order-1"
          >
            <h3 className="font-semibold text-lg mb-2">
              Tell us about yourself
            </h3>

            {/* Name */}
            <div>
              <label className="text-xs text-gray-600">Your Name</label>
              <input 
              type="text"
              {...register("riderName")}
                  defaultValue={user?.displayName}
              placeholder="Your Name" className="w-full input mt-1" />
            </div>

            {/* Driving License */}
            <div>
              <label className="text-xs text-gray-600">
                Driving License Number
              </label>
              <input
                type="text"
              {...register("drivingLicense")}
                placeholder="Driving License Number"
                className="w-full input mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-gray-600">Your Email</label>
              <input 
              
                type="email"
                {...register("riderEmail")}
                  defaultValue={user?.email}
                placeholder="Your Email"
                className="w-full input mt-1"
              />
            </div>

            {/* Region */}
            <div>
              <label className="text-xs text-gray-600">Region</label>
              <select
                  {...register("riderRegion")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                >
                  <option>Select your Region</option>
                  {regions.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
            </div>

            {/* District */}
            <div>
              <label className="text-xs text-gray-600">District</label>
              <select
                  {...register("riderDistrict")}
                  className="w-full mb-2 mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                >
                  <option>Select your District</option>
                  {districtsByRegion(riderRegion).map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
            </div>

            {/* NID */}
            <div>
              <label className="text-xs text-gray-600">NID</label>
              <input 
              type="text"
                  {...register("nid")}
              placeholder="NID" className="w-full input mt-1" />
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs text-gray-600">Phone Number</label>
              <input
                type="tel"
                
                  {...register("phoneNumber")}
                placeholder="Phone Number"
                className="w-full input mt-1"
              />
            </div>

            {/* Bike Model */}
            <div>
              <label className="text-xs text-gray-600">
                Bike Brand Model and Year
              </label>
              <input
                type="text"
                  {...register("bikeBrand")}
                placeholder="Bike Brand Model and Year"
                className="w-full input mt-1"
              />
            </div>

            {/* Registration */}
            <div>
              <label className="text-xs text-gray-600">
                Bike Registration Number
              </label>
              <input
                type="text"
                  {...register("bikeRegistration")}
                placeholder="Bike Registration Number"
                className="w-full input mt-1"
              />
            </div>

            {/* About */}
            <div>
              <label className="text-xs text-gray-600">
                Tell Us About Yourself
              </label>
              <textarea
                type="text"
                  {...register("riderInstruction")}
                placeholder="Tell Us About Yourself"
                className="w-full input resize-none h-24 mt-1"
              ></textarea>
            </div>

            {/* Button */}
            <button className="w-full bg-lime-400 hover:bg-lime-500 py-2 rounded-md text-sm font-semibold mt-2">
              Submit
            </button>
          </form>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              src={riderImg}
              alt="rider"
              className="w-48 sm:w-60 md:w-72 lg:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;
