import React, { useState } from "react";
import PaginationControls from "./PaginationControls";
import {
  createTeam,
  createSportEvent,
  deleteSportEvent,
} from "../services/sportEvent";
import { useSelectedSportEvents } from "../hooks/useSelectedSportEvents";

const OfferTable = ({ offerData = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { selectedEvents, setSelectedEvents, loading, error } =
    useSelectedSportEvents();
  const pageSize = 10;

  const paginatedData = offerData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPages = Math.ceil(offerData.length / pageSize);

  const handleToggle = async (item) => {
    const isSelected = selectedEvents.has(item.betRadarId);
    const newSet = new Set(selectedEvents);

    try {
      if (isSelected) {
        await deleteSportEvent(item.betRadarId);
        newSet.delete(item.betRadarId);
      } else {
        const homeTeamId = await createTeam({
          externalId: item.homeTeamId,
          name: item.homeTeamName,
        });
        const awayTeamId = await createTeam({
          externalId: item.awayTeamId,
          name: item.awayTeamName,
        });

        await createSportEvent({
          name: item.eventName,
          externalId: Number(item.betRadarId),
          startDate: new Date(item.startDate).toISOString(),
          homeTeamId,
          awayTeamId,
        });

        newSet.add(item.betRadarId);
      }

      setSelectedEvents(newSet);
    } catch (err) {
      console.error("Toggle failed:", err);
    }
  };

  if (loading) return <div className="p-4 text-center">Loading events...</div>;
  if (error)
    return (
      <div className="p-4 text-center text-red-500">Error loading events</div>
    );

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-lg">
      <table className="min-w-full table-fixed text-sm text-gray-700 whitespace-nowrap">
        <thead>
          <tr className="bg-gray-50 text-left text-xs text-gray-500">
            <th className="p-3 font-medium">Event name</th>
            <th className="p-3 font-medium">Home Team name</th>
            <th className="p-3 font-medium">Away Team name</th>
            <th className="p-3 font-medium">Start Date</th>
            <th className="p-3 font-medium">betRadarId</th>
            <th className="p-3 font-medium text-center">Select for the game</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 last:border-0 hover:bg-gray-50"
              >
                <td className="p-3">{item.eventName || "N/A"}</td>
                <td className="p-3">{item.homeTeamName || "N/A"}</td>
                <td className="p-3">{item.awayTeamName || "N/A"}</td>
                <td className="p-3">{item.startDate || "N/A"}</td>
                <td className="p-3">{item.betRadarId || "N/A"}</td>
                <td className="p-3 flex justify-center items-center">
                  <div className="relative inline-block w-11 h-5">
                    <input
                      id={`switch-${idx}`}
                      type="checkbox"
                      checked={selectedEvents.has(item.betRadarId)}
                      onChange={() => handleToggle(item)}
                      className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
                    />
                    <label
                      htmlFor={`switch-${idx}`}
                      className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                    ></label>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-3 text-center text-gray-400">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-center mt-4 mb-4">
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default OfferTable;
