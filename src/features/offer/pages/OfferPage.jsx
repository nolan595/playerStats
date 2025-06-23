import React, { useState } from "react";
import OfferTable from "../components/OfferTable";
import useOfferData from "../hooks/useOfferData";
import DateTimePicker from "../components/DateTimePicker";
import SearchInput from "../../../components/shared/SearchInput";

const OfferPage = () => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("2025-06-23T16:00");
  const params = {
    startDate: startDate.replace("T", " ") + ":00",
    sportId: 5,
  };

  const { data, loading, error } = useOfferData(params);

  const filteredData = data.filter((event) => {
    const searchLower = search.toLowerCase();
    return (
      event.eventName.toLowerCase().includes(searchLower) ||
      event.homeTeamName.toLowerCase().includes(searchLower) ||
      event.awayTeamName.toLowerCase().includes(searchLower) ||
      event.tournamentName?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        External Sport Events
      </h1>

      <div className="flex gap-4 mb-6 items-center">
        <div className="flex-grow-0 max-w-xs">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <DateTimePicker
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      {loading && <div className="text-center text-gray-500">Loading...</div>}
      {error && (
        <div className="text-center text-red-500">Error: {error.message}</div>
      )}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <OfferTable offerData={filteredData} />
        </div>
      )}
    </div>
  );
};

export default OfferPage;
