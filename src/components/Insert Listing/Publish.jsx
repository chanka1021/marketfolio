import React from "react";

function Publish({ listing }) {
  return (
    <div className="shadow-lg border rounded-xl p-6 mt-10 flex flex-col space-y-6 font-poppins">
      <h2 className="text-xl font-semibold">Publish Your Listing</h2>
      <p className="text-sm text-gray-600">
        Please review the information before publishing your ad.
      </p>
      <div className="flex items-center space-x-4">
        <img
          src={listing.photos[0]}
          alt="Listing Photo"
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-lg font-semibold">{listing.title}</h2>
          <p className="text-sm text-gray-600">{listing.desc}</p>
          <div className="flex items-center space-x-2">
            <span
              className="text-2xl"
              style={{ color: listing.cat.color }}
            >
              {listing.cat.icon}
            </span>
            <p className="text-sm text-gray-600">{listing.cat.name}</p>
          </div>
          <p className="text-green-800 font-semibold">{listing.price} €</p>
        </div>
      </div>
    </div>
  );
}

export default Publish;
