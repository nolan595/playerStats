import React from "react";
import OfferTable from "../components/OfferTable";
import useOfferData from "../hooks/useOfferData";

const OfferPage = () => {
  const params = {
    startDate: "2025-06-23 13:00:00",
    pageNumber: 1,
    pageSize: 50,
  };

  const { data, loading, error } = useOfferData(params);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        External Sport Events
      </h1>

      {loading && <div className="text-center text-gray-500">Loading...</div>}

      {error && (
        <div className="text-center text-red-500">Error: {error.message}</div>
      )}

      {!loading && !error && <OfferTable offerData={data} />}
    </div>
  );
};

export default OfferPage;
