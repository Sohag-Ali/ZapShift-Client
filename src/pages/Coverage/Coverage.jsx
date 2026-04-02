import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { map } from "leaflet";

const Coverage = () => {
  const position = [23.685, 90.3563]; // Center of Bangladesh
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.elements.location.value.toLowerCase();
    const district = serviceCenters.find((center) =>
      center.district.toLowerCase().includes(location),
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      // Pan the map to the found district
      mapRef.current.flyTo(coord, 12); // Zoom level 12 for closer view
    }
  };
  return (
    <div className="">
      <div className="px-4 sm:px-6">
        {/* Card Container */}
        <div className="bg-base-100 rounded-3xl p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6">
            We are available in 64 districts
          </h2>

          {/* Search Bar */}
       <form onSubmit={handleSearch} className="mb-8 max-w-md">

  <div className="relative w-full">

    {/* Input */}
    <input
      type="search"
      name="location"
      required
      placeholder="Search here"
      className="
        w-full 
        bg-base-200 
        rounded-full 
        pl-10 pr-28 
        py-2.5 
        text-sm 
        outline-none
      "
    />

    {/* Search Icon */}
    <svg
      className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeWidth="2"
        d="M21 21l-4.3-4.3M11 18a7 7 0 100-14 7 7 0 000 14z"
      />
    </svg>

    {/* Button */}
    <button
      type="submit"
      className="
        absolute 
        right-1 
        top-1/2 
        -translate-y-1/2 
        btn btn-primary 
        rounded-full 
        px-4 sm:px-6 
        h-8 sm:h-9 
        min-h-0
        text-xs sm:text-sm
      "
    >
      Search
    </button>

  </div>

</form>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-6"></div>

          {/* Sub Heading */}
          <h3 className="text-lg md:text-xl font-semibold text-secondary mb-4">
            We deliver almost all over Bangladesh
          </h3>

          {/* Map */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
            <MapContainer
              center={position}
              zoom={8}
              scrollWheelZoom={false}
              className="w-full h-full"
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {serviceCenters.map((center) => (
                <Marker
                  key={center.id}
                  position={[center.latitude, center.longitude]}
                >
                  <Popup>
                    <strong>{center.district}</strong> <br />
                    Service Area: {center.covered_area.join(", ")}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
